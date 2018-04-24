<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $table      = 'feature';
    protected $primaryKey = 'id_feature';
    public $timestamps = false;

    public static function getObject($id_apartment)
    {
        $feature = self::where('id_apartment', '=', $id_apartment)->first();

        if (empty($feature)) {
            return new Feature;
        }
        return $feature;
    }
}
