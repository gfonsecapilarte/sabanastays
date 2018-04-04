<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class BookingController extends Controller
{
    public function __construct(Request $request)
    {
        $this->checkSession($request);
    }

    public function create(Request $request)
    {
        die('good');
    }
}
