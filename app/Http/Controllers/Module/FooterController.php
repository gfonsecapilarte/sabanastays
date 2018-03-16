<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Footer as FooterModel;

class FooterController extends Controller
{
    public function getFooter()
    {
        return FooterModel::with(array('lang'))->first();
    }
}
