<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\Http\Request;

class AboutController{
    public function index(Request $request){
        $locale   = LaravelLocalization::getCurrentLocale();
        $about    = app('App\Http\Controllers\Module\AboutController')->getModule();
        $about    = $about->getData();
        $about    = (array)$about->lang;
        $about    = (array)$about[''.strtoupper($locale).''];

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/about-us/about-us',[
            'locale' => $locale,
            'about'  => (object) $about,
            'header' => $header
        ]);
    }
}
