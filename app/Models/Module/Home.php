<?php

namespace App\Models\Module;

use App\Models\ModelCore;

class Home extends ModelCore
{
    protected $table = 'home_module';
    protected $primaryKey = 'id_home_module';
    public $timestamps = false;
}
