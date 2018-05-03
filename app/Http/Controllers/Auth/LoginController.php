<?php

namespace App\Http\Controllers\Auth;

use App\User;
use \Curl\Curl;
use Google_Client;
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

    /*
     * Login with Facebook
     */
    public function facebookLogin(Request $request){
        $curl = new Curl();
        $curl->get('https://graph.facebook.com/v2.8/oauth/access_token',array(
            'grant_type'        => 'fb_exchange_token',
            'client_id'         => env('FB_CLIENT_ID'),
            'client_secret'     => env('FB_CLIENT_SECRET'),
            'fb_exchange_token' => $request->input('fb_exchange_token')
        ));

        if($curl->error){
            return array(
                'success' => false,
                'message' => 'Credentials failed'
            );
        }
        else{
            $user = User::where('email', '=', $request->input('email'))->first();
            if(empty($user)){
                $create = User::create(array(
                    'firstname'     => $request->input('name'),
                    'role'          => 'USER',
                    'account_type'  => 'FACEBOOK',
                    'email'         => $request->input('email'),
                    'password'      => bcrypt('123456')
                ));

                if ($create && Auth::attempt(array('email' => $request->input('email'), 'password' => '123456'))){
                    $bytes      = openssl_random_pseudo_bytes(32);
                    $api_token  = bin2hex($bytes);

                    $user = User::find(Auth::user()->id_user);
                    $user->api_token = $api_token;
                    $user->save();

                    Session::put('id_user', Auth::user()->id_user);
                    Session::put('email', Auth::user()->email);
                    Session::put('role', Auth::user()->role);
                    Session::put('firstname', Auth::user()->firstname);
                    Session::put('lastname', Auth::user()->lastname);
                    Session::put('session_id', Session::getId());
                    Session::put('api_token', $api_token);
                    Session::save();

                    return Session::all();
                }
            }
            else{
                if($user->account_type == 'FACEBOOK'){
                    if (Auth::attempt(array('email' => $request->input('email'), 'password' => '123456'))) {
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
                }

                if($user->account_type == 'GOOGLE'){
                    return array(
                        'success' => false,
                        'message' => __('general.googleNotice')
                    );
                }

                return array(
                    'success' => false,
                    'message' => __('general.socialMediaError')
                );

            }
        }
    }

    /*
     * Login with Google
     */
    public function googleLogin(Request $request){
        $client = new Google_Client();
        $ticket = $client->verifyIdToken($request->input('token'));
        if($ticket){
            $email = $ticket['email'];
            $name  = $ticket['name'];

            $user = User::where('email', '=', $email)->first();
            if(empty($user)){
                $create = User::create(array(
                    'firstname'     => $name,
                    'role'          => 'USER',
                    'account_type'  => 'GOOGLE',
                    'email'         => $email,
                    'password'      => bcrypt('123456')
                ));

                if ($create && Auth::attempt(array('email' => $email, 'password' => '123456'))){
                    $bytes      = openssl_random_pseudo_bytes(32);
                    $api_token  = bin2hex($bytes);

                    $user = User::find(Auth::user()->id_user);
                    $user->api_token = $api_token;
                    $user->save();

                    Session::put('id_user', Auth::user()->id_user);
                    Session::put('email', Auth::user()->email);
                    Session::put('role', Auth::user()->role);
                    Session::put('firstname', Auth::user()->firstname);
                    Session::put('lastname', Auth::user()->lastname);
                    Session::put('session_id', Session::getId());
                    Session::put('api_token', $api_token);
                    Session::save();

                    return Session::all();
                }
            }
            else{
                if($user->account_type == 'GOOGLE'){
                    if (Auth::attempt(array('email' => $email, 'password' => '123456'))) {
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
                }

                if($user->account_type == 'FACEBOOK'){
                    return array(
                        'success' => false,
                        'message' => __('general.facebookNotice')
                    );
                }
            }
        }
        else {
            return array(
                'success' => false,
                'message' => 'Credentials failed'
            );
        }
    }

    /*
     * Login for Administrators
     */
    public function adminLogin(Request $request){
        if(Auth::check()){
            return Session::all();
        }

        $data = array(
            'email'         => $request->input('email'),
            'password'      => $request->input('password'),
            'account_type'  => 'NORMAL',
            'role'          => 'ADMIN'
        );

        if (Auth::attempt($data)){
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

        if (Auth::attempt(array('email' => $request->input('email'), 'password' => $request->input('password'), 'account_type' => 'NORMAL'))) {
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

    /**
     * Check if session is for administrators
     */
    public function checkAdminSession(Request $request){
        $user = User::where('id_user', $request->input('id_user'))
            ->where('api_token',$request->input('api_token'))
            ->where('role','ADMIN')
            ->first();

        if($user){
            return array(
                'success' => true,
            );
        }

        return array(
            'success' => false,
        );
    }
}
