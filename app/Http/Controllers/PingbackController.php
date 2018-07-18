<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PingbackController extends Controller
{
    public function index(Request $request)
    {

        require_once app_path('Lib/paymentwall/lib/paymentwall.php');
        \Paymentwall_Base::setApiType(\Paymentwall_Base::API_GOODS);
        \Paymentwall_Base::setAppKey(env('PWALL_PROJECT_KEY')); // available in your Paymentwall merchant area
        \Paymentwall_Base::setSecretKey(env('PWALL_SECRET_KEY')); // available in your Paymentwall merchant area

        $pingback = new \Paymentwall_Pingback($request->all(), $_SERVER['REMOTE_ADDR']);
        if ($pingback->validate()) {
            $productId = $pingback->getProduct()->getId();
            if ($pingback->isDeliverable()) {
                // deliver the product
            } else if ($pingback->isCancelable()) {
                // withdraw the product
            } else if ($pingback->isUnderReview()) {
                // set "pending" as order status
            }
            echo 'OK'; // Paymentwall expects response to be OK, otherwise the pingback will be resent
        } else {
            echo $pingback->getErrorSummary();
        }

    }
}