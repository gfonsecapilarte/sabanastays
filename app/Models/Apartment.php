<?php

namespace App\Models;

use App\Models\ModelCore;

class Apartment extends ModelCore
{
    protected $table = 'apartment';
    protected $primaryKey = 'id_apartment';

    public function type()
    {
        return $this->belongsTo(\App\Models\ApartmentType::class, 'id_apartment_type')->with('lang.language');
    }

    public function amenities()
    {
        return $this->hasMany(\App\Models\ApartmentAmenity::class, 'id_apartment')->with(array('lang', 'icon'));
    }

    public function currency()
    {
        return $this->belongsTo(\App\Models\Currency::class, 'id_currency');
    }

    public function building()
    {
        return $this->belongsTo(\App\Models\Building::class, 'id_building')->with(array('city', 'lang.language'));
    }

    public function rate()
    {
        return $this->hasOne(\App\Models\Rate::class, 'id_apartment')->where('default', '=', 1);
    }

    public function feature()
    {
        return $this->hasOne(\App\Models\Feature::class, 'id_apartment');
    }
}
