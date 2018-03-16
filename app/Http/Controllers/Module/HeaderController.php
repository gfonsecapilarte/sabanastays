<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Header as HeaderModel;

class HeaderController extends Controller
{
    public function getHeader()
    {
        return HeaderModel::with(array('lang'))->first();
    }
}
