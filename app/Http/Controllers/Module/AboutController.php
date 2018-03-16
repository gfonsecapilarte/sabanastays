<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\About as AboutModel;

class AboutController extends Controller
{
    public function getAbout()
    {
        return AboutModel::with(array('lang'))->first();
    }
}
