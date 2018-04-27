<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class ApartmentType extends Model
{
    protected $table = 'apartment_type_lang';
    public $timestamps = false;

    public function language(){
        return $this->belongsTo(\App\Models\Language::class, 'id_lang');
    }
}
