<?php

namespace App\Models\Module;

use App\Models\ModelCore;

class Header extends ModelCore
{
    protected $table = 'header_module';
    protected $primaryKey = 'id_header_module';
    public $timestamps = false;
}
