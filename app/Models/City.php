<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'city';
    protected $primaryKey = 'id_city';

    public function state()
    {
        return $this->belongsTo('App\Models\State');
    }
}
