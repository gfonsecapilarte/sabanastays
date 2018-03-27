<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\HomeAbout as HomeAboutModel;
use App\Models\Media as MediaModel;

class HomeAboutController extends Controller
{
    public function getModule()
    {
        $result = HomeAboutModel::with('lang')->first();
        $module = json_decode($result);
        HomeAboutModel::parseLang($module);
        return json_encode($module);
    }
}
