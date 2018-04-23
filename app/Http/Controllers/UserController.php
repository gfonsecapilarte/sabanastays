<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller{
    public function __construct(Request $request){
        $this->checkSession($request);
    }

    /*
     * Get detail user
     */
    public function user(Request $request){
        $user = User::where('id_user', '=', $request->input('id_user'))
                ->where('api_token', '=', $request->input('api_token'))
                ->first();

        if(!$user){
            return response()->json(array(
                'success' => false,
                'message' => 'You have not permissions to see this detail user'
            ));
        }
        else{
            return response()->json($user);
        }
    }

    /*
     * Update an user
     */
    public function update(Request $request){
        $user = User::where('id_user', '=', $request->input('id_user'))
                ->where('api_token', '=', $request->input('api_token'))
                ->first();
        if(!$user){
            return response()->json(array(
                'success' => false,
                'message' => 'You have not permissions to update this user'
            ));
        }
        else{
            if($user->email != $request->input('email')){
                if (User::existsEmail($request->input('email'))) {
                    return array(
                        'success' => false,
                        'message' => 'User already registered'
                    );
                }
            }

            $user->firstname    = $request->input('firstname');
            $user->lastname     = $request->input('lastname');
            $user->birthdate    = $request->input('birthdate');
            $user->gender       = $request->input('gender');
            $user->email        = $request->input('email');
            $user->save();
            
            return response()->json($user);
        }
    }
}
