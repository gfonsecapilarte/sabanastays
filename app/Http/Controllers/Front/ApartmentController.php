<?php
namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ApartmentController as Apartment;
use Illuminate\Http\Request;

class ApartmentController extends Apartment
{
    public function getApartments(Request $request)
    {
        $apartments = parent::getApartments($request);
        $checkin    = date('M d Y', strtotime($request->checkin));
        $checkout   = date('M d Y', strtotime($request->checkout));

        return view('front/booking/booking',[
            'locale'        => 'en',
            'apartments'    => $apartments,
            'checkin'       => $checkin,
            'checkout'      => $checkout
        ]);
    }
}
