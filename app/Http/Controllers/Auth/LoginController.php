<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Get the needed authorization credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
//        echo "<pre>";
//var_dump(Auth::check());
//echo "</pre>";
//die();
        if (Auth::check()) {
//            Auth::getSession();
            return Session::all();
        }
//        die('sad');
        if (Auth::attempt(array('email' => $request->input('email'), 'password' => $request->input('password')))) {
//            echo "<pre>";
//print_r(Auth::user());
//echo "</pre>";
//die();
            Session::put('id_user', Auth::user()->id_user);
            Session::put('email', Auth::user()->email);
            Session::put('role', Auth::user()->role);
            Session::put('firstname', Auth::user()->firstname);
            Session::put('lastname', Auth::user()->lastname);
            Session::save();

            return Session::all();

            
//            return Auth::getSession();
            // Authentication passed...
            echo "<pre>";
            var_dump(Auth::check());
//            echo '***********************';
//            print_r(Auth::guard());
            echo '***********************';
            print_r(Auth::getSession());
            echo "</pre>";
            die('**********');
        }

        return array(
            'success' => false,
            'message' => 'Credentials failed'
        );

    }
}
