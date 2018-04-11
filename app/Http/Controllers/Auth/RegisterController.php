<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'firstname' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'role' => 'required|string|max:5',
            'phone' => 'string|max:45',
            'email' => 'string|email|max:100|unique:users',
            'social_id' => 'string|max:100|unique:users',
            'password' => 'string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(Request $request)
    {
        if (User::existsEmail($request->input('email'))) {
            return array(
                'success' => false,
                'message' => 'User already registered'
            );
        }
        $data = $request->all();
        $create = User::create(array(
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'gender' => $request->has('gender') ? $data['gender'] : null,
            'birthdate' => $request->has('birthdate') ? $data['birthdate'] : null,
            'phone' => $request->has('phone') ? $data['phone'] : null,
            'role' => $request->has('role') ? $data['role'] : 'USER',//$data['role'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ));

        if ($create && Auth::attempt(array('email' => $request->input('email'), 'password' => $request->input('password')))) {
            $bytes = openssl_random_pseudo_bytes(32);
            $api_token   = bin2hex($bytes);
            //update model
            $user = User::find(Auth::user()->id_user);
            $user->api_token = $api_token;
            $user->save();
            //create session
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

        return array(
            'success' => false,
            'message' => 'Error while creating account'
        );
    }

    public static function createSocial(Request $request)
    {
        $data = $request->all();
        return User::create(array(
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'role' => 'USER',
            'social_id' => $data['social_id'],
        ));
    }
}
