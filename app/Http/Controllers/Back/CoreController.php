<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CoreController extends Controller
{
    private $html = '';
    public function __construct(Request $request)
    {
        if($request->ajax()) {
            $this->checkSession($request);
        }
    }

    protected function display($view, $data = array(), $display_header = true, $display_footer = true)
    {
        if ($display_header) {
            $this->html .= $this->displayHeader();
        }

        $this->html .= view($view, $data);

        if ($display_footer) {
            $this->html .= $this->displayFooter();
        }

        return $this->html;
    }

    private function displayHeader()
    {
        return view('backoffice/head');
    }

    private function displayFooter()
    {
        return view('backoffice/foot');
    }
}
