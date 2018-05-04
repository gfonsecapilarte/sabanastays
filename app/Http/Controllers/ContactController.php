<?php
namespace App\Http\Controllers;
use Mail;

class ContactController extends Controller{

    /*
     * Method to send by email the message
     */
    public function sendMessage(){
        // Mail::send('emails.welcome', [], function ($message) {
        //     $message->from('jap@example.com', 'Sabanas');
        //     $message->to('jap@netmidas.com');
        // });
    }
}
