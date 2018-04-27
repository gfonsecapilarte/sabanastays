<?php

namespace App\Http\Controllers\Module;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\Header as HeaderModel;
use App\Models\Media as MediaModel;
use Illuminate\Support\Facades\Storage;

class HeaderController extends Controller
{
    public function getModule()
    {
        $result = HeaderModel::first();
        $module = json_decode($result);
        HeaderModel::fillMedia($module, array('id_media_logo', 'id_media_background'));
        return response()->json($module);
    }

    public function saveModule(Request $request)
    {
        $id_module = $request->input('id_header_module');
        $data = $request->all();

        $module = null;
        if (!empty($id_module)) {
            $module = HeaderModel::find($id_module)->first();
        } else {
            $module = new HeaderModel();
        }
        $module->save();
        //media logo
        if (array_key_exists('media_logo', $data) && is_array($data['media_logo']) && !empty($data['media_logo'])) {
            foreach ($data['media_logo'] as $file) {
                $filename = uniqid('hl').'.'.$file->getClientOriginalExtension();
                $file->move(storage_path('app/public/'), $filename);
                $media = MediaModel::getFirstMediaByType($module->id_header_module, 'header_module_logo');

                if (empty($media)) {
                    $media = new MediaModel();
                    $media->id_type = $module->id_header_module;
                    $media->type = 'header_module_logo';
                } else {
                    //remove old file
                    $remove_old_media = str_replace('/storage/', '', $media->path);
                    Storage::disk('public')->delete($remove_old_media);
                }

                $media->id_type = $module->id_header_module;
                $media->type = 'header_module_logo';
                $media->path = Storage::url($filename);
                $media->media_type = 'IMAGE';
                $media->save();
                $module->id_media_logo = $media->id_media;
                $module->save();
            }
        }
        //media background
        if (array_key_exists('media_background', $data) && is_array($data['media_background']) && !empty($data['media_background'])) {
            foreach ($data['media_background'] as $file) {
                $filename = uniqid('hl').'.'.$file->getClientOriginalExtension();
                $file->move(storage_path('app/public/'), $filename);
                $media = MediaModel::getFirstMediaByType($module->id_header_module, 'header_module_background');

                if (empty($media)) {
                    $media = new MediaModel();
                    $media->id_type = $module->id_header_module;
                    $media->type = 'header_module_background';
                } else {
                    //remove old file
                    $remove_old_media = str_replace('/storage/', '', $media->path);
                    Storage::disk('public')->delete($remove_old_media);
                }

                $media->id_type = $module->id_header_module;
                $media->type = 'header_module_background';
                $media->path = Storage::url($filename);
                $media->media_type = 'IMAGE';
                $media->save();
                $module->id_media_background = $media->id_media;
                $module->save();
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
            'id_header_module' => $module->id_header_module
        ));
    }
}
