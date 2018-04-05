<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\Apartment as ApartmentModel;
use App\Models\Booking as BookingModel;
use App\Models\Rate as RateModel;

class BookingController extends Controller
{
    public function __construct(Request $request)
    {
        $this->checkSession($request);
    }

    public function create(Request $request)
    {
        if (!$request->has('id_apartment') || !$request->has('checkin') || !$request->has('checkout')) {
            return response()->json(array(
                'success' => false,
                'message' => 'Bad request'
            ));
        }

        $available = BookingModel::getApartmentAvailability(
            $request->input('id_apartment'),
            $request->input('checkin'),
            $request->input('checkout'));

        if (!$available) {
            return response()->json(array(
                'success' => false,
                'message' => 'Not available'
            ));
        }

        //booking
        $booking = new BookingModel();
        $booking->id_user = $request->input('id_user');
        $booking->booking_date_start = $request->input('checkin');
        $booking->booking_date_end = $request->input('checkout');
        $booking->id_apartment = $request->input('id_apartment');
        $booking->status = 'RESERVED';
        //reference
        $reference = uniqid();
        $booking->reference = strtoupper($reference);

        //days
        $datediff = strtotime($request->input('checkout')) - strtotime($request->input('checkin'));
        $nights = round($datediff / (60 * 60 * 24));
        $booking->nights = $nights;
        //total_payment
        $apartment = ApartmentModel::find($request->input('id_apartment'));
        $total_payment = $nights * $apartment->price;
        $booking->value = $apartment->price;
        //check rates
        $rate = RateModel::getRateByApartment($request->input('id_apartment'));
        if (!empty($rate)) {
            $variant = $rate->variant;
            $variant_value = $total_payment * ($variant / 100);
            $total_payment += $variant_value;
            //add rate info
            $booking->id_rate = $rate->id_rate;
            $booking->variant = $variant;
            $booking->variant_value = $variant_value;
        }
        $booking->total_payment = $total_payment;

        //create booking
        if (!$booking->save()) {
            return response()->json(array(
                'success' => false,
                'message' => 'Error saving booking'
            ));
        }

        return response()->json($booking);

    }
}
