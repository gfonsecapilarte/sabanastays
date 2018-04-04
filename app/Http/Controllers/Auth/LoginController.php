<?php

namespace App\Http\Controllers\Auth;

use App\User;
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

    private function updateToken()
    {
        $bytes = openssl_random_pseudo_bytes(32);
        $api_token   = bin2hex($bytes);
        //update model
        $user = User::find(Auth::user()->id_user);
        $user->api_token = $api_token;
        $user->save();
        //update session
        Session::put('api_token', $api_token);
    }

    private function socialLogin(Request $request)
    {
//        if (Auth::attempt(array('social_id' => $request->input('social_id')))) {

        $user = User::where('social_id', '=', $request->input('social_id'))->first();
        if (empty($user)) {
            return false;
        }

        if (Auth::loginUsingId($user->id_user)) {
            $this->updateToken();
            //create session
            Session::put('id_user', Auth::user()->id_user);
//            Session::put('email', Auth::user()->email);
            Session::put('social_id', Auth::user()->social_id);
            Session::put('role', Auth::user()->role);
            Session::put('firstname', Auth::user()->firstname);
            Session::put('lastname', Auth::user()->lastname);
            Session::put('session_id', Session::getId());
            Session::save();

            return Session::all();
        }

        return false;
    }

    /**
     * Get the needed authorization credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        if (Auth::check()) {
            return Session::all();
        }

        if ($request->has('social_id')) {
            $login = $this->socialLogin($request);
            if ($login !== false) {
                return $login;
            } else {
                $create = RegisterController::createSocial($request);
                if ($create === false) {
                    return array(
                        'success' => false,
                        'message' => 'Cannot create account'
                    );
                }
                return $this->socialLogin($request);
            }
        }

        if (Auth::attempt(array('email' => $request->input('email'), 'password' => $request->input('password')))) {
            $this->updateToken();
            Session::put('id_user', Auth::user()->id_user);
            Session::put('email', Auth::user()->email);
            Session::put('role', Auth::user()->role);
            Session::put('firstname', Auth::user()->firstname);
            Session::put('lastname', Auth::user()->lastname);
            Session::put('session_id', Session::getId());
            Session::save();

            return Session::all();
        }

        return array(
            'success' => false,
            'message' => 'Credentials failed'
        );

    }
}
