<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\ApartmentController as Apartment;
use Illuminate\Http\Request;
use App\Models\Language;

class ApartmentController extends Apartment
{
    /*
     * Method to return details of a apartment
     * - it consults the apartment controller API
     */
    public function apartment($id = null, Request $request)
    {
        $request->request->add(['id_apartment' => $id]);
        $apartment            = parent::getApartment($request);
        $current_locale       = LaravelLocalization::getCurrentLocale();
        $current_language     = Language::where('iso',$current_locale)->first();
        $translated_apartment = array();
        $translated_amenities = array();

        foreach($apartment->lang as $lang){
            if($lang->id_lang == $current_language->id_lang){
                $translated_apartment['name']           = $lang->name;
                $translated_apartment['description']    = $lang->description;
            }
        }

        $apartment->lang = $translated_apartment;

        foreach($apartment->amenities as $amenity) {
            foreach($amenity[0]->lang as $lang){
                if($lang->id_lang == $current_language->id_lang){
                    $translated_amenities[] = $lang->name;
                }
            }
        }
        $apartment->amenities = $translated_amenities;

        return view('front/apartment/detail',[
    		'locale' 	=> $current_locale,
    		'languages'	=> Language::all(),
            'apartment' => $apartment
    	]);
    }
}
