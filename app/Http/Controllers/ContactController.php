<?php
namespace App\Http\Controllers;

use App\Mail\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller{

    /*
     * Method to send by email the message
     */
    public function sendMessage(Request $request){
        $contact = [
            'name'      => $request->input('name'),
            'email'     => $request->input('email'),
            'subject'   => $request->input('subject'),
            'message'   => $request->input('message')
        ];

        Mail::to('jap@netmidas.com')->send(new ContactUs($contact));

        return response()->json(array(
            'success'   => true,
            'message'   => __('general.sentMessage')
        ));
    }
}
