<?php

namespace App\Http\Controllers;

use App\Models\Amenity as AmenityModel;

class AmenityController extends Controller
{
    public function getAmenities()
    {
        $result = AmenityModel::with('lang')->get();
        $amenities = json_decode($result);
        AmenityModel::parseLang($amenities);
        return response()->json($amenities);
    }
}
