<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\Http\Request;

class AboutController{
    public function index(Request $request){
        $locale   = LaravelLocalization::getCurrentLocale();
        $about    = app('App\Http\Controllers\Module\AboutController')->getAbout();
        $about    = json_decode($about);
        $about    = (array)$about->lang;
        $about    = (array)$about[''.strtoupper($locale).''];

        /** Get body image of about us **/
        $request->request->add(['id_media' => $about['id_media']]);
        $body_image          = app('App\Http\Controllers\MediaController')->getMedia($request);
        $about['body_image'] = json_decode($body_image);

        /** Get header and logo images **/
        #$header_images = app('App\Http\Controllers\Module\HeaderController')->getHeader();
        #$about['header_images'] = (array) $header_images;

        return view('front/about-us/about-us',[
            'locale' => $locale,
            'about'  => (object) $about
        ]);
    }
}
