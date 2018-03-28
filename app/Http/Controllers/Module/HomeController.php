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
        $module->media_logo = null;
        if (!is_null($module->id_media)) {
            $module->media_logo = MediaModel::where('id_media', '=', $module->id_media)->with('lang')->get();
        }
        //search media images
        $media_result = MediaModel::getMediaByType($module->id_home_module, 'home_module');
        $module->media = json_decode($media_result);
        MediaModel::parseLang($module->media);
        return json_encode($module);
    }
}
