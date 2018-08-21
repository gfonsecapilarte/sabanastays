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
use App\Models\Media as MediaModel;

class BookingController extends Controller
{
    public function __construct(Request $request)
    {
//        $this->checkSession($request);
    }

    public function getBookings(Request $request)
    {
        $bookings = array();
        if ($request->has('term')) {
            $bookings = BookingModel::where('id_booking', '=', $request->input('term'))
                ->orWhere('reference', '=', $request->input('term'))
                ->with(array('payment', 'user'))->paginate($request->input('items_per_page', 15));
        } else {
            $bookings = BookingModel::with(array('payment', 'user'))->paginate($request->input('items_per_page', 15));
        }
        return response()->json(array(
            'success' => true,
            'bookings' => $bookings
        ));
    }

    /*
     * Get list of bookings by a gave Status
     * - upcoming
     * - completed
     * - cancelled
     */
    public function getBookinsByStatus(Request $request){
        $this->checkSession($request);
        if ($request->has('status')){
            $date = now()->format('Y-m-d');

            $bookings = BookingModel::where('id_user',$request->input('id_user'))
                ->with(array('payment','apartment'));

            if($request->input('status') == 'upcoming'){
                $bookings->where('status', 'PAID');
                $bookings->where('booking_date_start','>=',$date);
            }

            if($request->input('status') == 'completed'){
                $bookings->where('status', 'PAID');
                $bookings->where('booking_date_start','<',$date);
            }

            if($request->input('status') == 'cancelled'){
                $bookings->where('status', 'CANCELLED');
            }

            $bookings = $bookings->get();

            foreach ($bookings as $booking) {
                $booking->apartment->thumbnail = MediaModel::getFirstMediaByType($booking->apartment->id_apartment, 'apartment');
            }

            return response()->json(array(
                'success' => true,
                'bookings' => $bookings
            ));
        }

        return response()->json(array(
            'success'   => false,
            'message'   => 'You should give a status'
        ));
    }

    public function cancelBooking(Request $request)
    {
        if (!$request->has('id_booking')) {
            return response()->json(array(
                'success' => false,
                'message' => 'Bad request'
            ));
        }
        $booking = BookingModel::find($request->input('id_booking'));
        if (!$booking) {
            return response()->json(array(
                'success' => false,
                'message' => 'Booking not found'
            ));
        }

        $booking->status = BookingModel::CANCELLED;

        if (!$booking->save()) {
            return response()->json(array(
                'success' => false,
                'message' => 'Problem saving booking'
            ));
        }

        return response()->json(array(
            'success' => true
        ));
    }

    public function create(Request $request)
    {

        //check if payment is of before booking
        if ($request->has('id_booking')) {
            $booking = BookingModel::find($request->input('id_booking'));
            if ($booking->status === BookingModel::PAID) {
                return response()->json(array(
                    'success' => false,
                    'message' => 'Booking already paid'
                ));
            } else if ($booking->status === BookingModel::INCOMPLETED) {
                return response()->json(array(
                    'success' => false,
                    'message' => 'Booking process is incompleted'
                ));
            } else {
                return $this->makeCheckout($request, $booking);
            }
        }

        if (!$request->has('id_apartment') || !$request->has('checkin') || !$request->has('checkout')) {
            return response()->json(array(
                'success' => false,
                'message' => __('general.badRequest')
            ));
        }

        $available = BookingModel::getApartmentAvailability(
            $request->input('id_apartment'),
            $request->input('checkin'),
            $request->input('checkout'));

        if (!$available) {
            return response()->json(array(
                'success' => false,
                'message' => __('general.aptoNotAvailable')
            ));
        }

        //booking
        $booking = new BookingModel();
        $booking->id_user = $request->input('id_user');
        $booking->booking_date_start = $request->input('checkin');
        $booking->booking_date_end = $request->input('checkout');
        $booking->id_apartment = $request->input('id_apartment');
        $booking->id_address = $request->input('id_address_booking');
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
        $total_nights = $nights * $apartment->price;
        $total_nights = round($total_nights, 2);
        $total_payment = $total_nights;
        $booking->value = $apartment->price;
        $booking->attempt = 1;

        //check rates
        $rate = RateModel::getRateByNights($request->input('nights'));
        // echo "<pre>";
        // print_r( $rate->toArray());
        // echo "<pre> total_nights=";
        // print_r( $total_nights);
        // echo "<pre> total_payment=";
        // print_r( $total_payment);
        // echo "<pre>";
        // print_r( $booking->toArray());
        
        if (!empty($rate)) {
           $variant = $rate->variant;
           $variant_value = $total_payment * ($variant / 100);
           $total_payment -= $variant_value;
           $total_payment = round($total_payment, 2);

        //    echo "<pre> variant=";
        //    print_r( $variant);
        //    echo "<pre> variant_value=";
        //    print_r( $variant_value);
        //    echo "<pre> total_payment=";
        //    print_r( $total_payment);
        //    die();

            // $total_payment = $total_nights * $rate->variant;
            // $total_payment = round($total_payment, 2);
            // $variant_value = $total_payment - $total_nights;


            //add rate info
            $booking->id_rate = $rate->id_rate;
            $booking->variant = $rate->variant;
            $booking->variant_value = $variant_value;
        }
        $booking->total_payment = $total_payment;

        //create booking
        if (!$booking->save()) {
            return response()->json(array(
                'success' => false,
                'message' => __('general.errorSavingBooking')
            ));
        }

        return $this->makeCheckout($request, $booking);

    }

    public function generateToken(Request $request)
    {
        require_once app_path('Lib/paymentwall/lib/paymentwall.php');
        
        $json = base64_decode($request->input('data'));
        $data = json_decode($json);

        $tokenModel = new \Paymentwall_OneTimeToken();
        $token =  $tokenModel->create(array(
            'public_key' => env('PWALL_PUBLIC_KEY'),
            'card[number]' => $data->ccNo,
            'card[exp_month]' => $data->expMonth,
            'card[exp_year]' => $data->expYear,
            'card[cvv]' => $data->cvv
        ));

        if ($token->type === 'token') {
            return response()->json(array(
                'success' => true,
                'token' => $token->getToken()
            ));
        }

        return response()->json(array(
            'success' => false,
            'message' => $token->error
        ));
    }

    /**
     * Proccess payment
     * @param Request $request
     * @param BookingModel $booking
     * @return type
     */
    private function makeCheckout(Request $request, BookingModel $booking)
    {
        require_once app_path('Lib/paymentwall/lib/paymentwall.php');

//        \Paymentwall_Config::getInstance()->set(array(
//            'api_type' => \Paymentwall_Config::API_GOODS,
//            'public_key' => env('PWALL_PROJECT_KEY'),
//            'private_key' => env('PWALL_SECRET_KEY')
//        ));
//
//        \Twocheckout::privateKey(env('PWALL_PRIVATE_KEY'));
//        \Twocheckout::sellerId(env('PWALL_SELLER_ID'));
//        if (env('TCO_SANDBOX')) {
//            \Twocheckout::sandbox(true);
//        }

        \Paymentwall_Config::getInstance()->set(array(
            'private_key' => env('PWALL_PRIVATE_KEY')
        ));

        $user = UserModel::find($booking->id_user);
//        $address_booking = AddressModel::with(array('city', 'state', 'country'))->find($request->input('id_address_booking'));
        $address_booking = AddressModel::with(array('city', 'state', 'country'))->find(1);

        $address_booking_data = array(
            'name'        => $user->firstname.' '.$user->lastname,
            'addrLine1'   => $address_booking->address,
            'city'        => $address_booking->city->name,
            'state'       => $address_booking->state->name,
            'country'     => $address_booking->country->name,
            'zipCode'     => $address_booking->postcode,
            'email'       => $user->email,
            'phoneNumber' => !empty($user->phone) ? $user->phone : '-'
        );
        $address_billing_data = $address_booking_data;

        if ($request->input('id_address_payment') !== $request->input('id_address_booking')) {
//            $address_billing = AddressModel::with(array('city', 'state', 'country'))->find($request->input('id_address_payment'));
            $address_billing = AddressModel::with(array('city', 'state', 'country'))->find(1);
            $address_billing_data = array(
                'name'        => $user->firstname.' '.$user->lastname,
                'addrLine1'   => $address_billing->address,
                'city'        => $address_billing->city->name,
                'state'       => $address_billing->state->name,
                'country'     => $address_billing->country->name,
                'zipCode'     => $address_billing->postcode,
                'email'       => $user->email,
                'phoneNumber' => !empty($user->phone) ? $user->phone : '-'
            );
        }

        try {
            // $data = array(
            //     "sellerId"        => env('TCO_SELLER_ID'),
            //     "merchantOrderId" => $booking->id_booking,
            //     "token"           => $request->input('tco_token'),
            //     "currency"        => $request->input('currency_iso'),
            //     "total"           => $booking->total_payment,
            //     "billingAddr"     => $address_billing_data,
            //     "shippingAddr"     => $address_booking_data
            // );

            

//            $checkout = \Twocheckout_Charge::auth($data);

            /**
             * Payment Wall
             */

            $chargeInfo = array(
                'email'                      => $user->email,
                'history[registration_date]' => time(),
                'amount'                     => $booking->total_payment,
                'currency'                   => $request->input('currency_iso'),
                'token'                      => $request->input('token'),
                'description'                => 'Order #'.$booking->id_booking
            );

            $charge = new \Paymentwall_Charge();
            $charge->create($chargeInfo);

//            $charge->get();
            $response = $charge->getPublicData();

//            echo "<pre>";
//            print_r($charge);
//            echo '********************';
//            print_r($charge->getPublicData());
//            print_r($charge->getRawResponseData());
//            print_r($charge->getId());
//            print_r($charge->getResponseLogInformation());
//            echo "</pre>";
//            die();

            /**
             * End Payment Wall
             */


//            if ($checkout['response']['responseCode'] === 'APPROVED') {
//            if ($response->success) {
            if ($charge->isSuccessful()) {
                $paymentwall_charge = json_decode($charge->getRawResponseData());
                //save payment
                $payment = new PaymentModel();
                $payment->id_booking = $booking->id_booking;
                $payment->id_user = $booking->id_user;
//                $payment->transaction_id = $checkout['response']['transactionId'];
                $payment->transaction_id = $charge->getId();
//                $payment->amount = $checkout['response']['total'];
                $payment->amount = $paymentwall_charge->amount_paid;
                $payment->id_currency = $request->input('id_currency');
                $payment->description = 'Booking apartment #'.$booking->id_apartment.' since '.$booking->booking_date_start.' to '.$booking->booking_date_end.'. Message: '.$paymentwall_charge->risk;
//                $payment->status = $checkout['response']['responseCode'];
                $payment->status = $paymentwall_charge->risk;
                $payment->payment_date = date('Y-m-d');
                $payment->payment_type = PaymentModel::ONETIME;
                $payment->payment_method = PaymentModel::CREDIT_CARD;
                $payment->id_address = $request->input('id_address_payment');
                if ($payment->save()) {
                    $booking->status = BookingModel::PAID;
                    if ($request->has('attempt')) {
                        $booking->attempt = (int)$request->input('attempt');
                    }
                    $booking->save();
                }
                //return response
                return response()->json(array(
                    'success' => true,
                    'booking' => $booking,
//                    'checkout' => $checkout['response']
                ));
            } else {
                $errors = json_decode($response, true);
                return response()->json(array(
                    'success' => false,
                    'message' => $errors['error']['message'] . ' ('.$errors['error']['code'].')'
                ));
            }
        } catch (\Twocheckout_Error $e) {
            //change attempt
            if ($request->has('attempt')) {
                $booking->attempt = (int)$request->input('attempt');
                if ((int)$request->input('attempt') === 3) {
                    $booking->status = BookingModel::INCOMPLETED;
                }
                $booking->save();
            }
            //response
            return response()->json(array(
                'success' => false,
                'message' => $e->getMessage(),
                'attempt' => $booking->attempt,
                'id_booking' => $booking->id_booking
            ));
        }

        return response()->json(array(
            'success' => false,
            'message' => __('general.errorProcessingPayment')
        ));
    }

    /**
     * @deprecated since version 1.2
     * @param Request $request
     * @param BookingModel $booking
     * @return type
     */
    private function makeToCheckout(Request $request, BookingModel $booking)
    {
        throw new Exception('Deprecated', '403');
        
        require_once app_path('Lib/2checkout/lib/Twocheckout.php');

        \Twocheckout::privateKey(env('TCO_PRIVATE_KEY'));
        \Twocheckout::sellerId(env('TCO_SELLER_ID'));
        if (env('TCO_SANDBOX')) {
            \Twocheckout::sandbox(true);
        }

        $user = UserModel::find($booking->id_user);
        $address_booking = AddressModel::with(array('city', 'state', 'country'))->find($request->input('id_address_booking'));

        $address_booking_data = array(
            'name'        => $user->firstname.' '.$user->lastname,
            'addrLine1'   => $address_booking->address,
            'city'        => $address_booking->city->name,
            'state'       => $address_booking->state->name,
            'country'     => $address_booking->country->name,
            'zipCode'     => $address_booking->postcode,
            'email'       => $user->email,
            'phoneNumber' => !empty($user->phone) ? $user->phone : '-'
        );
        $address_billing_data = $address_booking_data;

        if ($request->input('id_address_payment') !== $request->input('id_address_booking')) {
            $address_billing = AddressModel::with(array('city', 'state', 'country'))->find($request->input('id_address_booking'));
            $address_billing_data = array(
                'name'        => $user->firstname.' '.$user->lastname,
                'addrLine1'   => $address_billing->address,
                'city'        => $address_billing->city->name,
                'state'       => $address_billing->state->name,
                'country'     => $address_billing->country->name,
                'zipCode'     => $address_billing->postcode,
                'email'       => $user->email,
                'phoneNumber' => !empty($user->phone) ? $user->phone : '-'
            );
        }

        try {
            $data = array(
                "sellerId"        => env('TCO_SELLER_ID'),
                "merchantOrderId" => $booking->id_booking,
                "token"           => $request->input('tco_token'),
                "currency"        => $request->input('currency_iso'),
                "total"           => $booking->total_payment,
                "billingAddr"     => $address_billing_data,
                "shippingAddr"     => $address_booking_data
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
                $payment->id_address = $request->input('id_address_payment');
                if ($payment->save()) {
                    $booking->status = BookingModel::PAID;
                    if ($request->has('attempt')) {
                        $booking->attempt = (int)$request->input('attempt');
                    }
                    $booking->save();
                }
                //return response
                return response()->json(array(
                    'booking' => $booking,
                    'checkout' => $checkout['response']
                ));
            }
        } catch (\Twocheckout_Error $e) {
            //change attempt
            if ($request->has('attempt')) {
                $booking->attempt = (int)$request->input('attempt');
                if ((int)$request->input('attempt') === 3) {
                    $booking->status = BookingModel::INCOMPLETED;
                }
                $booking->save();
            }
            //response
            return response()->json(array(
                'success' => false,
                'message' => $e->getMessage(),
                'attempt' => $booking->attempt,
                'id_booking' => $booking->id_booking
            ));
        }

        return response()->json(array(
            'success' => false,
            'message' => __('general.errorProcessingPayment')
        ));
    }
}
