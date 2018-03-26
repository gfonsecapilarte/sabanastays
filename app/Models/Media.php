<?php

namespace App\Models;

use App\Models\ModelCore;

class Media extends ModelCore
{
    protected $table = 'media';
    protected $primaryKey = 'id_media';

    public static function getMediaByType($id_type, $type)
    {
        return self::where('id_type', '=', $id_type)->where('type', '=', $type)->with('lang')->get();
    }

    public static function getMediaById($id_media)
    {
        return self::where('id_media', '=', $id_media)->with('lang')->get();
    }
}
