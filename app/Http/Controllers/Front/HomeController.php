<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Models\Language;

class HomeController{
    public function index(){
        $locale             = LaravelLocalization::getCurrentLocale();

        /** Get data of Header Home **/
        $header_home        = app('App\Http\Controllers\Module\HomeController')->getHome();
        $header_home        = json_decode($header_home);
        $header_home->lang  = (array)$header_home->lang;
        $header_home->lang  = $header_home->lang[''.strtoupper($locale).''];

        /** Get data of body Home **/
        $body_home          = app('App\Http\Controllers\Module\HomeAboutController')->getModule();
        $body_home          = json_decode($body_home);
        $body_home->lang    = (array)$body_home->lang;
        $body_home->lang    = $body_home->lang[''.strtoupper($locale).''];

        /** Array to save the formated data of home **/
        $home  = array();

        $home['header_title'] = $header_home->lang->title;
        $home['header_descr'] = $header_home->lang->description;
        $home['header_logo']  = $header_home->media_logo[0];
        $home['header_media'] = $header_home->media;
        $home['body_title']   = $body_home->lang->title;
        $home['body_descr']   = $body_home->lang->description;
        $home['video_url']    = $body_home->lang->video_url;

        return view('front/home/index',[
            'locale'        => $locale ,
            'home'	        => (object) $home,
            'languages'	    => Language::all(),
        ]);
    }
}
