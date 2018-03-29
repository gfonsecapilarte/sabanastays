<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Models\Language;

class ContactController{

    /*
     * Method to load the contact us page
     */
    public function loadContactPage(){
        $locale = LaravelLocalization::getCurrentLocale();

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        /** Get contact us data **/
        $contact        = app('App\Http\Controllers\Module\ContactController')->getModule();
        $contact        = $contact->getData();
        $contact->lang  = (array)$contact->lang;
        $contact->lang  = $contact->lang[''.strtoupper($locale).''];

        // echo "<pre>";
        // print_r($contact);
        // echo "</pre>";

        return view('front/contact-us/contact-us',[
            'locale'    => LaravelLocalization::getCurrentLocale(),
            'header'    => $header,
            'contact'   => $contact
        ]);
    }
}
