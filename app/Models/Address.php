<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'address';
    protected $primaryKey = 'id_address';
    public $timestamps = false;

    public static function getAddressByIdUser($id_user)
    {
        return self::join('user_address', 'user_address.id_address', '=', 'address.id_address')->where('user_address.id_user', '=', $id_user)->first();
    }
}
