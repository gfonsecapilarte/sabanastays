<?php

namespace App\Http\Controllers;

use App\Models\Rate as RateModel;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class RateController extends Controller{
    public function __construct(Request $request){
//        $this->checkSession($request);
    }


    public function getRates()
    {
        return RateModel::all();
    }

    /**
     * List Rates
     */
    public function listRates(Request $request)
    {
        $rates = array();
        if ($request->has('term')) {
            $rates = RateModel::where('id_rate', '=', $request->input('term'))
                ->orWhere('name', 'like', $request->input('term'))->paginate($request->input('items_per_page', 15));
        } else {
            $rates = RateModel::paginate($request->input('items_per_page', 15));
        }
        
        return response()->json(array(
            'success' => true,
            'rates' => $rates
        ));
    }

    public function saveRate(Request $request)
    {
        $id_rate = $request->input('id_rate');
        $response = false;
        $data = $request->all();

        $data['information'] = json_decode($data['information']);

        

        if (empty($id_rate)) {
            $response = $this->createRate($data);
        } else {
            $response = $this->updateRate(RateModel::find($id_rate), $data);
        }

        return response()->json(array(
            'success' => (bool)$response,
            'id_rate' => $response
        ));
    }

    private function createRate($data)
    {
        $rate = new RateModel();
        return $this->updateRate($rate, $data);
    }


    /**
     * Save user from BO
     */
    private function updateRate($rate, $data)
    {
        $from = 0;
        $to = 0;
        if(isset($data['information']->nights)){
            $nights = explode("-",$data['information']->nights);
            $from=$nights[0];
            $to=$nights[1];
        }

        $rate->name    = $data['information']->name;
        $rate->from    = $from;
        $rate->to    = $to;
        $rate->variant    = $data['information']->variant;
    
        // echo "<pre>::::PENDING TO DO::::";
        // print_r($rate->toArray());
        // echo "</pre>";
        // die();

        try {
            $rate->save();
        } catch (QueryException $ex) {
            return false;
        }

        return $rate->id_rate;
    }
}
