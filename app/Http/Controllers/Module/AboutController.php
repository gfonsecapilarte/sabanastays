<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\About as AboutModel;

class AboutController extends Controller
{
    public function getModule()
    {
        $result = AboutModel::with('lang')->first();
        $module = json_decode($result);
        AboutModel::parseLang($module);
        return response()->json($module);
    }
}
