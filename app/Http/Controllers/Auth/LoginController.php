<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

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
//        if (Auth::attempt(array('email' => $request->input('email'), 'password' => $request->input('password')))) {
//        return AuthenticatesUsers::login($request);
//        if (AuthenticatesUsers::attemptLogin($request)) {
//            return Auth::user();
//        }
//echo "<pre>";
//print_r($request->all());
//echo "</pre>";
//die();
            echo "<pre>";
print_r($this->sendLoginResponse($request));
echo "</pre>";
die();
        if ($this->attemptLogin($request)) {
            echo 'a';
            return $this->sendLoginResponse($request);
        } else {
            echo 'b';
            return $this->sendFailedLoginResponse($request, 'auth.failed_status');
        }


    }
}
