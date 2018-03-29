<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Models\Language;

class UserController{

    /*
     * Method to load the login page
     */
    public function loadLoginPage(){
        $locale = LaravelLocalization::getCurrentLocale();

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/users/login',[
            'locale'    => LaravelLocalization::getCurrentLocale(),
            'header'    => $header,
        ]);
    }

    /*
     * Method to load the profile page
     */
    public function loadProfilePage(){
        $locale = LaravelLocalization::getCurrentLocale();

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/users/profile',[
            'locale'    => LaravelLocalization::getCurrentLocale(),
            'header'    => $header,
        ]);
    }
}
