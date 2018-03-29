<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class TermsServiceController{

    /*
     * Method to load the Terms of Service page
     */
    public function loadPage(){
        $locale = LaravelLocalization::getCurrentLocale();

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/terms-service/terms-service',[
            'locale'    => $locale,
            'header'    => $header,
        ]);
    }
}
