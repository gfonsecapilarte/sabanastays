<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'country';
    protected $primaryKey = 'id_country';

    public function states()
    {
        return $this->hasMany('App\Models\State');
    }
}
