<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class PrivacyPolicyController{

    /*
     * Method to load the Privacy Policy page
     */
    public function loadPage(){
        $locale = LaravelLocalization::getCurrentLocale();

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/privacy-policy/privacy-policy',[
            'locale'    => $locale,
            'header'    => $header,
        ]);
    }
}
