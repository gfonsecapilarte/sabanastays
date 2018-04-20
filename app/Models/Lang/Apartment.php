<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    protected $table = 'apartment_lang';

    public static function getObject($id_apartment, $id_lang)
    {
        $apartment = self::where(array(
            array('id_apartment', '=', $id_apartment),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($apartment)) {
            return new Apartment;
        }
        return $apartment;
    }
}
