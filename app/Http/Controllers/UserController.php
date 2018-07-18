<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class UserController extends Controller{
    public function __construct(Request $request){
//        $this->checkSession($request);
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

    /**
     * List users
     */
    public function listUsers(Request $request)
    {
        $users = array();
        if ($request->has('term')) {
            $users = User::where('id_user', '=', $request->input('term'))
                ->orWhere('email', 'like', $request->input('term'))->paginate($request->input('items_per_page', 15));
        } else {
            $users = User::paginate($request->input('items_per_page', 15));
        }
        return response()->json(array(
            'success' => true,
            'users' => $users
        ));
    }

    public function saveUser(Request $request)
    {
        $id_user = $request->input('id_user');
        $response = false;
        $data = $request->all();

        $data['information'] = json_decode($data['information']);

        if (empty($id_user)) {
            $response = $this->createUser($data);
        } else {
            $response = $this->updateUser(User::find($id_user), $data);
        }

        return response()->json(array(
            'success' => (bool)$response,
            'id_user' => $response
        ));
    }

    private function createUser($data)
    {
        $user = new User();
        $user->account_type = 'NORMAL';
        return $this->updateUser($user, $data);
    }


    /**
     * Save user from BO
     */
    private function updateUser($user, $data)
    {
        $user->firstname    = $data['information']->firstname;
        $user->lastname     = $data['information']->lastname;
        $user->gender       = $data['information']->gender;
        $user->phone        = $data['information']->phone;
        $user->role         = $data['information']->role;

        $user->birthdate    = (empty($data['information']->birthdate))?'1990-01-01':$data['information']->birthdate;

        if (property_exists($data['information'], 'email') && !empty($data['information']->email)) {
            $user->email        = $data['information']->email;
        }
        if (property_exists($data['information'], 'password') && !empty($data['information']->password)) {
            $user->password = bcrypt($data['information']->password);
        }

        // echo "<pre>";
        // print_r($user->toArray());
        // echo "</pre>";
        // die();

        try {
            $user->save();
        } catch (QueryException $ex) {
            return false;
        }

        return $user->id_user;
    }
}
