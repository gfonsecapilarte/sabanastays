<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Header as HeaderModel;

class HeaderController extends Controller
{
    public function getHeader()
    {
        $result = HeaderModel::with(array('lang'))->first();
        $module = json_decode($result);
        HeaderModel::parseLang($module);
        return json_encode($module);
    }
}
