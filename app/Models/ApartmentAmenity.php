<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApartmentAmenity extends Model
{
    protected $table = 'apartment_amenity';
    protected $primaryKey = 'id_apartment_amenity';

    public function lang()
    {
//        $table = str_replace('_', ' ', $this->table);
//        $table = ucwords($table);
//        $table = str_replace(' ', '', $table);
        return $this->hasOne(\App\Models\Lang\Amenity::class, 'id_amenity');
    }

    public function icon()
    {
        return $this->hasOne(\App\Models\Amenity::class, 'id_amenity');
    }
}
