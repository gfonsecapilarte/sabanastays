<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Home as HomeModel;
use App\Models\Media as MediaModel;

class HomeController extends Controller
{
    public function getHome()
    {
        $result = HomeModel::with('lang')->first();
        $module = json_decode($result);
        HomeModel::parseLang($module);
        //search media images
        $media_result = MediaModel::getMediaByType($module->id_home_module, 'home_module');
        $module->sliders = json_decode($media_result);
        MediaModel::parseLang($module->sliders);
        return json_encode($module);
    }
}
