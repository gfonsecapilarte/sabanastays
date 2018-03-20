<?php

namespace App\Http\Controllers;

use App\Models\Currency as CurrencyModel;

class CurrencyController extends Controller
{
    public function getCurrencies()
    {
        return CurrencyModel::all();
    }
}
