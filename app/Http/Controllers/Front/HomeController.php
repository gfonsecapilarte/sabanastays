<?php
namespace App\Http\Controllers\Front;

use App\Http\Controllers\Module\HomeController as Home;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Models\Language;

class HomeController extends Home{
    public function index(){
        $current_locale     = LaravelLocalization::getCurrentLocale();
        $current_language   = Language::where('iso',$current_locale)->first();
        $home               = parent::getHome();
        $home               = json_decode($home);
        $trans_home         = array();

        foreach ($home->lang as $lang){
            if($lang->id_lang == $current_language->id_lang){
                $trans_home['title']                = $lang->title;
                $trans_home['short_description']    = $lang->short_description;
                $trans_home['description']          = $lang->description;
            }
        }

        $home->lang = $trans_home;

        return view('front/home/index',[
            'locale' => $current_locale ,
            'home'	 => $home
        ]);
    }
}
