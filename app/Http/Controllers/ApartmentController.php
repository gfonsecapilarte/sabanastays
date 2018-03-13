<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment as ApartmentModel;

class ApartmentController extends Controller
{
    //

    public function getApartments(Request $request)
    {
        $result = ApartmentModel::where('id_building', 1)->with(array('amenities', 'type', 'lang'))->get();
//        $result = ApartmentModel::where('id_building', 1)->with(array('type', 'translate'))->get();
        
        return $result;
        return ApartmentModel::all();
        $apartments = ApartmentModel::all();

        echo "<pre>";
        print_r($apartments);
        echo "</pre>";
        die();
    }
}
