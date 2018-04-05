<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\State;
use App\Models\City;

class LocationController extends Controller
{
    public function getCountries()
    {
        $countries = Country::all();
        return response()->json($countries);
    }

    public function getStates(Request $request)
    {
        if ($request->has('id_country')) {
            $states = State::where('id_country', '=', $request->input('id_country'));
        } else {
            $states = State::all();
        }
        return response()->json($states);
    }

    public function getCities(Request $request)
    {
        if ($request->has('id_state')) {
            $cities = City::where('id_state', '=', $request->input('id_state'));
        } else {
            $cities = City::all();
        }
        return response()->json($cities);
    }
}
