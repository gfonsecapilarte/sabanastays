<?php

namespace App\Http\Controllers\Module;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\About as AboutModel;
use App\Models\Lang\AboutModule as AboutModelLang;
use App\Models\Media as MediaModel;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    public function getModule()
    {
        $result = AboutModel::with('lang')->first();
        $module = json_decode($result);
        AboutModel::parseLang($module);
        return response()->json($module);
    }

    public function saveModule(Request $request)
    {
        $id_module = $request->input('id_about_module');
        $data = $request->all();

        $module = null;
        if (!empty($id_module)) {
            $module = AboutModel::find($id_module)->first();
        } else {
            $module = new AboutModel();
        }
        $module->save();
        //lang
        $data_information = json_decode($data['information']);
        foreach ($data_information as $id_language => $information) {
            if (empty($information)) {
                continue;
            }
            $module_lang = AboutModelLang::getObject($module->id_about_module, $id_language);
            $module_lang->id_home_module = $module->id_home_module;
            $module_lang->id_lang = $id_language;
            $module_lang->title = $information->title;
            $module_lang->description = $information->description;
            $module_lang->save(array(), 'id_about_module', array('title' => $module_lang->title, 'description' => $module_lang->description));
            //media
            if (array_key_exists('about_media_'.$id_language, $data)
                && is_array($data['about_media_'.$id_language])
                && !empty($data['about_media_'.$id_language])
            ) {
                foreach ($data['about_media_'.$id_language] as $file) {
                    $filename = uniqid('am').'.'.$file->getClientOriginalExtension();
                    $file->move(storage_path('app/public/'), $filename);
                    $media = new MediaModel();
                    $media->id_type = $module->id_about_module;
                    $media->type = 'about_module';
                    $media->path = Storage::url($filename);
                    $media->media_type = 'IMAGE';
                    $media->save();
                    //associate to information
                    $module_lang->id_media = $media->id_media;
                    $module_lang->save(array(), 'id_about_module', array('id_media' => $module_lang->id_media));
                }
            }
        }
        //remove media
        if (array_key_exists('remove_media', $data)) {
            $data_remove_media = json_decode($data['remove_media']);
            if (is_array($data_remove_media) && !empty($data_remove_media)) {
                foreach ($data_remove_media as $remove_file) {
                    $remove_media = MediaModel::find($remove_file->id_media);
                    $remove_filename = str_replace('/storage/', '', $remove_media->path);
                    Storage::disk('public')->delete($remove_filename);
                    $remove_media->delete();
                }
            }
        }

        return response()->json(array(
            'success' => true,
            'id_about_module' => $module->id_about_module
        ));
    }
}
