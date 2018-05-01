<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApartmentAmenity extends Model
{
    protected $table = 'apartment_amenity';
    protected $primaryKey = 'id_apartment_amenity';
    public $timestamps = false;

    public function lang()
    {
//        $table = str_replace('_', ' ', $this->table);
//        $table = ucwords($table);
//        $table = str_replace(' ', '', $table);
        return $this->belongsTo(\App\Models\Lang\Amenity::class, 'id_amenity');
    }

    public function icon()
    {
        return $this->belongsTo(\App\Models\Amenity::class, 'id_amenity');
    }

    public static function updateApartmentAmenity($id_apartment, $id_amenity, $checked)
    {
        if ($checked) {
            self::enableAmenity($id_apartment, $id_amenity);
        } else {
            self::disableAmenity($id_apartment, $id_amenity);
        }
    }

    private static function enableAmenity($id_apartment, $id_amenity)
    {
        $apartment_amenity = self::where(array(
            array('id_apartment', '=', $id_apartment),
            array('id_amenity', '=', $id_amenity),
        ))->first();

        if (empty($apartment_amenity)) {
            $apartment_amenity = new ApartmentAmenity();
            $apartment_amenity->id_apartment = $id_apartment;
            $apartment_amenity->id_amenity = $id_amenity;
            $apartment_amenity->save();
        }
    }

    private static function disableAmenity($id_apartment, $id_amenity)
    {
        $apartment_amenity = self::where(array(
            array('id_apartment', '=', $id_apartment),
            array('id_amenity', '=', $id_amenity),
        ))->first();

        if (!empty($apartment_amenity)) {
            $apartment_amenity->delete();
        }
    }
}
