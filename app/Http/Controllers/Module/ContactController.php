<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Contact as ContactModel;

class ContactController extends Controller
{
    public function getModule()
    {
        $result = ContactModel::with('lang')->first();
        $module = json_decode($result);
        ContactModel::parseLang($module);
        return response()->json($module);
    }
}
