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


        

        if ($locale=='en') {
            return view('front/privacy-policy/privacy-policy',[
                'locale'    => $locale,
                'header'    => $header,
            ]);    
        } else {
            return view('front/privacy-policy/es-privacy-policy',[
                'locale'    => $locale,
                'header'    => $header,
            ]);    
        }

        
    }
}
