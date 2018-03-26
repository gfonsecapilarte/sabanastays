<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\About as AboutModel;

class AboutController extends Controller
{
    public function getAbout()
    {
        $result = AboutModel::with('lang')->first();
        $module = json_decode($result);
        AboutModel::parseLang($module);
        return json_encode($module);
    }
}
