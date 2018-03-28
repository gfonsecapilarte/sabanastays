<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Header as HeaderModel;

class HeaderController extends Controller
{
    public function getHeader()
    {
        $result = HeaderModel::first();
        $module = json_decode($result);
        HeaderModel::fillMedia($module, array('id_media_logo', 'id_media_background'));
        return response()->json($module);
    }
}
