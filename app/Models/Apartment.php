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
        return $this->hasMany('App\Models\Amenity', 'id_amenity');
    }
}
