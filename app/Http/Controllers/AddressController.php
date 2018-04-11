<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Address as AddressModel;

class AddressController extends Controller
{
    public function __construct(Request $request)
    {
        $this->checkSession($request);
    }

    public function getAddresses(Request $request)
    {
        $addresses = AddressModel::getAddressByIdUser($request->input('id_user'));
        return array(
            'addresses' => $addresses
        );
    }

    public function create(Request $request)
    {
        $address = new AddressModel();
        $address->postcode = $request->input('postcode');
        $address->address = $request->input('address');
        $address->second_address = $request->has('second_address') ? $request->input('second_address') : null;
        $address->id_country = $request->input('id_country');
        $address->id_state = $request->input('id_state');
        $address->id_city = $request->input('id_city');

        if ($address->save()) {
            DB::table('user_address')->insert(array(
                'id_user' => $request->input('id_user'),
                'id_address' => $address->id_address
            ));

            return response()->json(array(
                'success' => true,
                'address' => $address
            ));
        }

        return response()->json(array(
            'success' => false,
            'message' => 'Error saving address'
        ));
    }
}
