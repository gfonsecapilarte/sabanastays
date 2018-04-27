<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    protected $table = 'building_lang';
    public $timestamps = false;

    public function language(){
        return $this->belongsTo(\App\Models\Language::class, 'id_lang');
    }
}
