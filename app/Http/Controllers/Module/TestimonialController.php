<?php

namespace App\Http\Controllers\Module;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\Testimonial as TestimonialModel;
use App\Models\Lang\TestimonialModule as TestimonialModelLang;
use App\Models\Media as MediaModel;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    public function getModule()
    {
        $result = TestimonialModel::with(array('lang'))->first();
        $module = json_decode($result);
        TestimonialModel::parseLang($module);
        TestimonialModel::fillMedia($module);
        return response()->json($module);
    }

    public function saveModule(Request $request)
    {
        $data = $request->all();
        $data_information = json_decode($data['information']);
        foreach ($data_information as $id_testimonial => $information) {
            if (empty($information)) {
                continue;
            }
            self::saveTestimonial($id_testimonial, $information, $data);
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
            'success' => true
        ));
    }

    private static function saveTestimonial($id_testimonial, $information, $data)
    {
        $module = TestimonialModel::find($id_testimonial);
        $module->name = $information->name;
        $module->company = $information->company;
        $module->save();

        //translation
        foreach ($information->lang as $id_language => $text) {
            if (empty($text)) {
                continue;
            }
            $module_lang = TestimonialModelLang::getObject($module->id_testimonial_module, $id_language);
            $module_lang->id_testimonial_module = $module->id_testimonial_module;
            $module_lang->id_lang = $id_language;
            $module_lang->text = $text;
            $module_lang->save(array(), 'id_testimonial_module', array('text' => $module_lang->text));
        }
        //media
        if (array_key_exists('testimonial_media_'.$id_testimonial, $data)
            && is_array($data['testimonial_media_'.$id_testimonial])
            && !empty($data['testimonial_media_'.$id_testimonial])
        ) {
            foreach ($data['testimonial_media_'.$id_testimonial] as $file) {
                $filename = uniqid('tm').'.'.$file->getClientOriginalExtension();
                $file->move(storage_path('app/public/'), $filename);
                $media = new MediaModel();
                $media->id_type = $module->id_testimonial_module;
                $media->type = 'testimonial_module';
                $media->path = Storage::url($filename);
                $media->media_type = 'IMAGE';
                $media->save();
                //associate to information
                $module->id_media = $media->id_media;
                $module->save();
            }
        }
    }
}
