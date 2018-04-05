<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    protected $table      = 'rate';
    protected $primaryKey = 'id_rate';

    public static function getRateByApartment($id_apartment)
    {
        return self::where('id_apartment', '=', $id_apartment)->orderBy('default')->first();
    }
}
