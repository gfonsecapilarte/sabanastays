<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\Http\Request;
use App\Models\Language;

class ApartmentController{
    /*
     * Method to return details of a apartment
     */
    public function apartment($id = null, Request $request){
        $request->request->add(['id_apartment' => $id]);

        $locale           = LaravelLocalization::getCurrentLocale();
        $apartment        = app('App\Http\Controllers\ApartmentController')->getApartment($request);
        $apartment        = $apartment->getData();
        $apartment->lang  = (array)$apartment->lang;
        $apartment->lang  = $apartment->lang[''.strtoupper($locale).''];

        /** Amenities **/
        $amenities = array();
        foreach ($apartment->amenities as $amenity) {
            $amenity->lang = (array)$amenity->lang;
            array_push($amenities,$amenity->lang[''.strtoupper($locale).'']);
        }
        $apartment->amenities = $amenities;

        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/apartment/detail',[
            'apartment' => $apartment,
            'header'    => $header,
            'locale'    => $locale
    	]);
    }
}
