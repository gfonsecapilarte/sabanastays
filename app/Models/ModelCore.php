<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelCore extends Model
{
    public function lang()
    {
        return $this->hasOne('App\Models\Lang\\'.ucfirst($this->table), $this->primaryKey);
    }
}
