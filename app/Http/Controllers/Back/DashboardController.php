<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Back\CoreController;

class DashboardController extends CoreController
{
    public function index()
    {
        return $this->display('backoffice/dashboard');
    }
}
