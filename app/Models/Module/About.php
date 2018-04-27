<?php

namespace App\Models\Module;

use App\Models\ModelCore;

class About extends ModelCore
{
    protected $table = 'about_module';
    protected $primaryKey = 'id_about_module';
    public $timestamps = false;
}
