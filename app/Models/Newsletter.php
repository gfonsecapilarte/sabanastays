<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class newsletter extends Model{
    protected $table = 'newsletter';
    protected $primaryKey = 'id_newsletter';
    public $timestamps = false;
}
