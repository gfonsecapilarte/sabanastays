<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class Amenity extends Model
{
    protected $table = 'amenity_lang';
    public $timestamps = false;

    public function language(){
        return $this->belongsTo(\App\Models\Language::class, 'id_lang');
    }
}
