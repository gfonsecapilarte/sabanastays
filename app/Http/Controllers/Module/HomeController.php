<?php

namespace App\Http\Controllers\Module;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\Home as HomeModel;
use App\Models\Lang\HomeModule as HomeModelLang;
use App\Models\Media as MediaModel;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function getModule()
    {
        $result = HomeModel::with('lang')->first();
        $module = json_decode($result);
        HomeModel::parseLang($module);
        HomeModel::fillMedia($module, 'id_media');
        //search media images
        $media_result = MediaModel::getMediaByType($module->id_home_module, 'home_module');
        $module->sliders = json_decode($media_result);
        MediaModel::parseLang($module->sliders);
        return response()->json($module);
    }

    public function saveModule(Request $request)
    {
        $id_module = $request->input('id_home_module');
        $data = $request->all();

        $module = null;
        if (!empty($id_module)) {
            $module = HomeModel::find($id_module)->first();
        } else {
            $module = new HomeModel();
        }
        $module->save();
        //lang
        $data_information = json_decode($data['information']);
        foreach ($data_information as $id_language => $information) {
            if (empty($information)) {
                continue;
            }
            $module_lang = HomeModelLang::getObject($module->id_home_module, $id_language);
            $module_lang->id_home_module = $module->id_home_module;
            $module_lang->id_lang = $id_language;
            $module_lang->title = $information->title;
            $module_lang->description = $information->description;
            $module_lang->save(array(), 'id_home_module', array('title' => $module_lang->title, 'description' => $module_lang->description));
        }
        //media
        if (array_key_exists('media', $data) && is_array($data['media']) && !empty($data['media'])) {
            foreach ($data['media'] as $file) {
                $filename = uniqid('h').'.'.$file->getClientOriginalExtension();
                $file->move(storage_path('app/public/'), $filename);
                $media = new MediaModel();
                $media->id_type = $module->id_home_module;
                $media->type = 'home_module';
                $media->path = Storage::url($filename);
                $media->media_type = 'IMAGE';
                $media->save();
            }
        }
        //remove media
        if (array_key_exists('remove_media', $data)) {
            $data_remove_media = json_decode($data['remove_media']);
            if (is_array($data_remove_media) && !empty($data_remove_media)) {
                foreach ($data_remove_media as $remove_file) {
                    $remove_media = MediaModel::find($remove_file->id_media);
                    if (!empty($remove_media)) {
                        $remove_filename = str_replace('/storage/', '', $remove_media->path);
                        Storage::disk('public')->delete($remove_filename);
                        $remove_media->delete();
                    }
                }
            }
        }

        return response()->json(array(
            'success' => true,
            'id_home_module' => $module->id_home_module
        ));
    }
}
