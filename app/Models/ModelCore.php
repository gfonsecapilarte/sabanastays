<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelCore extends Model
{
    public function lang()
    {
        $table = str_replace('_', ' ', $this->table);
        $table = ucwords($table);
        $table = str_replace(' ', '', $table);
        return $this->hasMany('App\Models\Lang\\'.$table, $this->primaryKey);
    }
}
