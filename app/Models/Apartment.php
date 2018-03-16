<?php

namespace App\Models;

use App\Models\ModelCore;

class Apartment extends ModelCore
{
    protected $table = 'apartment';
    protected $primaryKey = 'id_apartment';

    public function type()
    {
        return $this->hasOne('App\Models\ApartmentType', 'id_apartment_type');
    }

    public function amenities()
    {
        return $this->hasMany('App\Models\ApartmentAmenity', 'id_apartment');
        $result = $this->hasMany('App\Models\ApartmentAmenity', 'id_apartment')->get();
        $amenities = json_decode($result);
//        foreach ($amenities as &$amenity) {
//
//        }
        return $amenities;
//        echo "<pre>";
//print_r($amenities);
//echo "</pre>";
//die();
//        $amenities = json_encode($result);
    }
}
