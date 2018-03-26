<?php
namespace App\Http\Controllers\Front;

use App\Http\Controllers\Module\AboutController as About;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Models\Language;

class AboutController extends About{
    public function index(){
        $current_locale     = LaravelLocalization::getCurrentLocale();
        $current_language   = Language::where('iso',$current_locale)->first();
        $about              = parent::getAbout();
        $trans_about        = array();

        foreach ($about->lang as $lang){
            if($lang->id_lang == $current_language->id_lang){
                $trans_about['company_title']   = $lang->company_title;
                $trans_about['description']     = $lang->description;
                $trans_about['image_url']       = $lang->image_url;
            }
        }

        $about = $trans_about;

        return view('front/about-us/about-us',[
            'locale' => $current_locale,
            'about'  => $about
        ]);
    }
}
