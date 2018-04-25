<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Back\CoreController;

use App\Models\Language as LanguageModel;

class WebController extends CoreController
{
    public function index()
    {
        $data = array(
            'languages' => json_decode(LanguageModel::get())
        );
        return $this->display('backoffice/web/form', $data);
    }
}
