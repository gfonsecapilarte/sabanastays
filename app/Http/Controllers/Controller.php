<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use App\User;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function checkSession(Request $request)
    {
        if (!$request->has('id_user') || !$request->has('api_token')) {
            $this->responseUnauthorized();
        }
        $user = User::where(
            array(
                array('id_user', '=', $request->input('id_user')),
                array('api_token', '=', $request->input('api_token'))
            )
        )->first();

        if (empty($user)) {
            $this->responseUnauthorized();
        }

        return true;
    }

    private function responseUnauthorized()
    {
        $response = response()->json(
            array(
                'success' => false,
                'message' => 'Credentials failed'
            )
        );
        die($response);
    }
}
