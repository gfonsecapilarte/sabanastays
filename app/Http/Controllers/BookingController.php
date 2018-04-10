<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\Apartment as ApartmentModel;
use App\Models\Booking as BookingModel;
use App\Models\Rate as RateModel;
use App\Models\Payment as PaymentModel;
use App\Models\Address as AddressModel;
use App\User as UserModel;
use App\Models\City as CityModel;
use App\Models\State as StateModel;
use App\Models\Country as CountryModel;

class BookingController extends Controller
{
    public function __construct(Request $request)
    {
        $this->checkSession($request);
    }

    public function create(Request $request)
    {
        //check if payment is of before booking
        if ($request->has('id_booking')) {
            $booking = BookingModel::find($request->input('id_booking'));
            if ($booking->status !== BookingModel::PAID) {
                return $this->makeCheckout($request, $booking);
            } else {
                return response()->json(array(
                    'success' => false,
                    'message' => 'Booking already paid'
                ));
            }
        }

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
        $booking->status = BookingModel::RESERVED;
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
//        $booking->id_booking = 1;
        if (!$booking->save()) {
            return response()->json(array(
                'success' => false,
                'message' => 'Error saving booking'
            ));
        }

        return $this->makeCheckout($request, $booking);
        
    }

    private function makeCheckout(Request $request, BookingModel $booking)
    {
        require_once app_path('Lib/2checkout/lib/Twocheckout.php');

        \Twocheckout::privateKey(env('TCO_PRIVATE_KEY'));
        \Twocheckout::sellerId(env('TCO_SELLER_ID'));
        if (env('TCO_SANDBOX')) {
            \Twocheckout::sandbox(true);
        }

//        $user = UserModel::find($booking->id_user);
//        $address = AddressModel::getAddressByIdUser($user->id_user);

        $address_data = array(
//            'name'        => $user->firstname.' '.$user->lastname,
//            'addrLine1'   => $address->address,
//            'city'        => CityModel::find($address->id_city)->name,
//            'state'       => StateModel::find($address->id_state)->name,
//            'zipCode'     => $address->postcode,
//            'country'     => CountryModel::find($address->id_country)->name,
            'name'        => $request->input('name'),
            'addrLine1'   => $request->input('address'),
            'city'        => $request->input('city'),
            'state'       => $request->input('state'),
            'zipCode'     => $request->input('postcode'),
            'country'     => $request->input('country'),
            'email'       => $request->input('email'),
            'phoneNumber' => $request->input('phone')
        );


        try {
            $data = array(
                "sellerId"        => env('TCO_SELLER_ID'),
                "merchantOrderId" => $booking->id_booking,
                "token"           => $request->input('tco_token'),
                "currency"        => $request->input('currency_iso'),
                "total"           => $booking->total_payment,
                "billingAddr"     => $address_data,
                "shippingAddr"     => $address_data
            );

            $checkout = \Twocheckout_Charge::auth($data);
            if ($checkout['response']['responseCode'] === 'APPROVED') {
                //save payment
                $payment = new PaymentModel();
                $payment->id_booking = $booking->id_booking;
                $payment->id_user = $booking->id_user;
                $payment->transaction_id = $checkout['response']['transactionId'];
                $payment->amount = $checkout['response']['total'];
                $payment->id_currency = $request->input('id_currency');
                $payment->description = 'Booking apartment #'.$booking->id_apartment.' since '.$booking->booking_date_start.' to '.$booking->booking_date_end.'. Message: '.$checkout['response']['responseMsg'];
                $payment->status = $checkout['response']['responseCode'];
                $payment->payment_date = date('Y-m-d');
                $payment->payment_type = PaymentModel::ONETIME;
                $payment->payment_method = PaymentModel::CREDIT_CARD;
                if ($payment->save()) {
                    $booking->status = BookingModel::PAID;
                    $booking->save();
                }
                //return response
                return response()->json(array(
                    'booking' => $booking,
                    'checkout' => $checkout['response']
                ));
            }
//            $this->assertEquals('APPROVED', $charge['response']['responseCode']);
        } catch (\Twocheckout_Error $e) {
//            $this->assertEquals('Unauthorized', $e->getMessage());
            return response()->json(array(
                'success' => false,
                'message' => $e->getMessage(),
                'id_booking' => $booking->id_booking
            ));
        }

        return response()->json(array(
            'success' => false,
            'message' => 'Error processing payment'
        ));

//        return response()->json(array(
//            'booking' => $booking,
//            'checkout' => $checkout
//        ));
    }
}
