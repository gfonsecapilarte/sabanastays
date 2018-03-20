<?php

namespace App\Http\Controllers;

use App\Models\Language as LanguageModel;

class LanguageController extends Controller
{
    public function getLanguages()
    {
        return LanguageModel::all();
    }
}
