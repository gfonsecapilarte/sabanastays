<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    protected $table = 'building_lang';
    public $timestamps = false;

    public static function getObject($id_building, $id_lang)
    {
        $building = self::where(array(
            array('id_building', '=', $id_building),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($building)) {
            return new Building;
        }
        return $building;
    }

    public function language()
    {
        return $this->belongsTo(\App\Models\Language::class, 'id_lang');
    }
}
