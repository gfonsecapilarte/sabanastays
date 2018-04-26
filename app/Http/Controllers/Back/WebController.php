<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Back\CoreController;

use App\Models\Media as MediaModel;

//Modules
use App\Models\Module\Header as HeaderModel;
use App\Models\Module\Home as HomeModel;
use App\Models\Module\HomeAbout as HomeAboutModel;
use App\Models\Module\About as AboutModel;
use App\Models\Module\Contact as ContactModel;
use App\Models\Module\Testimonial as TestimonialModel;

use App\Http\Controllers\Module\TestimonialController;

use App\Models\Language as LanguageModel;

class WebController extends CoreController
{
    public function index()
    {
        $data = array(
            'languages' => json_decode(LanguageModel::get()),
            'header_module' => self::getHeaderModuleData(),
            'home_module' => self::getHomeModuleData(),
            'home_about_module' => self::getHomeAboutModuleData(),
            'contact_module' => self::getContactModuleData(),
            'about_module' => self::getAboutModuleData(),
            'testimonial_module' => self::getTestimonialModuleData(),
        );
//        echo "<pre>";
//print_r($data);
//echo "</pre>";
//die();
        return $this->display('backoffice/web/form', $data);
    }

    private static function getMedia($id_media)
    {
        return json_decode(MediaModel::getMediaById($id_media));
    }

    private static function getHeaderModuleData()
    {
        $result = HeaderModel::first();
        $module = json_decode($result);
        $module->media_background = self::getMedia($module->id_media_background)[0];
        $module->media_logo = self::getMedia($module->id_media_logo)[0];
        return $module;
    }

    private static function getHomeModuleData()
    {
        $result = HomeModel::with('lang')->first();
        $module = json_decode($result);
        HomeModel::parseLang($module);
        $media_result = MediaModel::getMediaByType($module->id_home_module, 'home_module');
        $module->sliders = json_decode($media_result);
        return $module;
    }

    private static function getHomeAboutModuleData()
    {
        $result = HomeAboutModel::with('lang')->first();
        $module = json_decode($result);
        HomeAboutModel::parseLang($module);
        return $module;
    }

    private static function getAboutModuleData()
    {
        $result = AboutModel::with('lang')->first();
        $module = json_decode($result);
        AboutModel::parseLang($module);
        foreach ($module->lang as &$lang) {
            $media = self::getMedia($lang->id_media);
            $lang->media = $media ? $media : null;
        }
        return $module;
    }

    private static function getContactModuleData()
    {
        $result = ContactModel::with('lang')->first();
        $module = json_decode($result);
        ContactModel::parseLang($module);
        return $module;
    }

    private static function getTestimonialModuleData()
    {
        $result = TestimonialModel::with('lang')->get();
        $testimonials = json_decode($result);
        foreach ($testimonials as &$testimonial) {
            TestimonialModel::parseLang($testimonial);
            $media = self::getMedia($testimonial->id_media);
            $testimonial->media = $media ? $media : null;
        }
        return $testimonials;
    }
}
