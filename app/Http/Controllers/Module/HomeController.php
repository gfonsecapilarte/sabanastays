<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Home as HomeModel;

class HomeController extends Controller
{
    public function getHome()
    {
        return HomeModel::with(array('lang'))->first();
    }
}
