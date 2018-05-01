<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\User as UserModel;
use App\Http\Controllers\Back\CoreController;

class UserController extends CoreController
{
    public function index()
    {
        $data = array(
            'users' => json_decode(UserModel::get())
        );
//        echo "<pre>";
//print_r($data);
//echo "</pre>";
//die();
        return $this->display('backoffice/user/list', $data);
    }

    public function createUser()
    {
        return $this->loadUserForm();
    }

    public function editUser(Request $request)
    {
        return $this->loadUserForm($request->input('id_user'));
    }

    private function loadUserForm($id_user = null)
    {
        $data = array();
        if (!is_null($id_user)) {
//            $data['user'] = json_decode(UserModel::where('id_user', '=', $id_user));
            $data['user'] = json_decode(UserModel::find($id_user));
        }

//        echo "<pre>";
//print_r($data['apartment']->media);
////print_r($data['languages']);
//echo "</pre>";
//die();

        return $this->display('backoffice/user/form', $data);
    }
}
