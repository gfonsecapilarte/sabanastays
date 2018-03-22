<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Home as HomeModel;
use App\Models\Media as MediaModel;

class HomeController extends Controller
{
    public function getHome()
    {
        $result = HomeModel::with(array('lang'))->first();
        $module = json_decode($result);
        $module->media_logo = null;
        if (!is_null($module->id_media_logo)) {
            $module->media_logo = MediaModel::where('id_media', '=', $module->id_media_logo)->with('lang')->get();
        }
        //search media images
        $media_result = MediaModel::getMediaByType($module->id_home_module, 'home_module');
        $module->media = json_decode($media_result);

//        echo "<pre>";
//print_r($module);
//echo "</pre>";
//die();
        return json_encode($module);
    }
}
