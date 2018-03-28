<?php

namespace App\Models;

use App\Models\ModelCore;

class Building extends ModelCore
{
    public $timestamps = false;
    protected $table = 'building';
    protected $primaryKey = 'id_building';
}
