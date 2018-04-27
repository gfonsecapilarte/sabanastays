<?php

namespace App\Http\Controllers\Module;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\HomeAbout as HomeAboutModel;
use App\Models\Lang\HomeAboutModule as HomeAboutModuleLang;
use App\Models\Media as MediaModel;

class HomeAboutController extends Controller
{
    public function getModule()
    {
        $result = HomeAboutModel::with('lang')->first();
        $module = json_decode($result);
        HomeAboutModel::parseLang($module);
        return response()->json($module);
    }

    public function saveModule(Request $request)
    {
        $id_module = $request->input('id_home_about_module');
        $data = $request->all();

        $module = null;
        if (!empty($id_module)) {
            $module = HomeAboutModel::find($id_module)->first();
        } else {
            $module = new HomeAboutModel();
        }
        $module->save();
        //lang
        $data_information = json_decode($data['information']);
        foreach ($data_information as $id_language => $information) {
            if (empty($information)) {
                continue;
            }
            $module_lang = HomeAboutModuleLang::getObject($module->id_home_module, $id_language);
            $module_lang->id_home_about_module = $module->id_home_about_module;
            $module_lang->id_lang = $id_language;
            $module_lang->title = $information->title;
            $module_lang->description = $information->description;
            $module_lang->video_url = $information->video_url;
            $module_lang->save(
                array(),
                'id_home_about_module',
                array(
                    'title' => $module_lang->title,
                    'description' => $module_lang->description,
                    'video_url' => $module_lang->video_url
                )
            );
        }
        
        return response()->json(array(
            'success' => true,
            'id_home_about_module' => $module->id_home_about_module
        ));
    }
}
