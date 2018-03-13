<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment as ApartmentModel;
use App\Models\Amenity as AmenityModel;

class ApartmentController extends Controller
{
    //

    public function getApartments(Request $request)
    {
//        return ApartmentModel::where('id_building', 1)->with(array('amenities', 'type', 'lang'))->get();
        $result = ApartmentModel::where('id_building', 1)->with(array('amenities', 'type', 'lang'))->get();
//        $result = ApartmentModel::where('id_building', 1)->with(array('type', 'translate'))->get();
        $apartments = json_decode($result);

        foreach ($apartments as &$apartment) {
            foreach ($apartment->amenities as &$amenity) {
                $amenity = AmenityModel::where('id_amenity', $amenity->id_amenity)->with('lang')->get();
            }
        }


        return $apartments;

        return $result;

        
        //////////////////////////////
        return ApartmentModel::all();
        $apartments = ApartmentModel::all();

        echo "<pre>";
        print_r($apartments);
        echo "</pre>";
        die();
    }
}
