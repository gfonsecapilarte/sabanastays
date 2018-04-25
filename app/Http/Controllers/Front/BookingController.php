<?php
namespace App\Http\Controllers\Front;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Models\Language;

class BookingController{

    /*
     * Method to load the booking page
     */
    public function loadBookingPage(){
        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        /** Load countries **/
        $countries = app('App\Http\Controllers\LocationController')->getCountries();
        $countries = $countries->getData();

        return view('front/booking/booking',[
			'locale' 	    => LaravelLocalization::getCurrentLocale(),
			'languages'  	=> Language::all(),
            'header'        => $header,
            'countries'     => $countries
		]);
    }

    /*
     * Method to load the my booking page
     */
    public function loadMyBookingsPage(){
        /** Get header and logo images **/
        $header = app('App\Http\Controllers\Module\HeaderController')->getModule();
        $header = $header->getData();

        return view('front/booking/my-bookings/my-bookings',[
			'locale' 	=> LaravelLocalization::getCurrentLocale(),
            'header'    => $header
		]);
    }
}
