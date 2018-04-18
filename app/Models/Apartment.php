<?php

namespace App\Models;

use App\Models\ModelCore;

class Apartment extends ModelCore
{
    protected $table = 'apartment';
    protected $primaryKey = 'id_apartment';

    public function type()
    {
        return $this->hasOne(\App\Models\ApartmentType::class, 'id_apartment_type')->with('lang');
    }

    public function amenities()
    {
        return $this->hasMany(\App\Models\ApartmentAmenity::class, 'id_apartment')->with(array('lang', 'icon'));
        $result = $this->hasMany('App\Models\ApartmentAmenity', 'id_apartment')->get();
        $amenities = json_decode($result);
        return $amenities;
    }

    public function currency()
    {
        return $this->belongsTo(\App\Models\Currency::class, 'id_currency');
    }

    public function building()
    {
        return $this->belongsTo(\App\Models\Building::class, 'id_building')->with(array('city', 'lang'));
    }
}
