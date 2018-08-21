<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Back\CoreController;
use App\Models\Rate as RateModel;

class RateController extends CoreController
{
    public function index()
    {
        return $this->display('backoffice/rate/list');
    }

    public function createRate()
    {
        return $this->loadRateForm();
    }

    public function editRate(Request $request)
    {
        return $this->loadRateForm($request->input('id_rate'));
    }

    private function loadRateForm($id_rate = null)
    {
        // $id_rate =3;
        $data = array();
        if (!is_null($id_rate)) {
            $data['rate'] = json_decode(RateModel::find($id_rate));
            $data['rate']->nights = "".$data['rate']->from.'-'.$data['rate']->to;
        }

        // echo '<pre>';
        // print_r($data['rate']);
        // die();
        return $this->display('backoffice/rate/form', $data);
    }
}
