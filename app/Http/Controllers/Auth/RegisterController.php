<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;

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
        $data = $request->all();
        return User::create(array(
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'gender' => $request->has('gender') ? $data['gender'] : null,
            'birthdate' => $request->has('birthdate') ? $data['birthdate'] : null,
            'role' => $request->has('role') ? $data['role'] : 'USER',//$data['role'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ));
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
