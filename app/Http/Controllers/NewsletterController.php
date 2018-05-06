<?php
namespace App\Http\Controllers;

use App\Mail\ContactUs;
use Illuminate\Http\Request;
use App\Models\Newsletter;

class NewsletterController extends Controller{
    public function saveEmail(Request $request){
        $newsletter = Newsletter::where('email',$request->input('email'))->count();

        if($newsletter > 0){
            return response()->json(array(
                'success'   => false,
                'message'   => __('general.newsletterError')
            ));
        }

        $newsletter = new Newsletter;
        $newsletter->email = $request->input('email');
        $newsletter->save();

        return response()->json(array(
            'success'   => true,
            'message'   => __('general.newsletterSuccess')
        ));
    }
}
