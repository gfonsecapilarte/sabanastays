<?php

namespace App\Http\Controllers\Module;

use App\Http\Controllers\Controller;
use App\Models\Module\Testimonial as TestimonialModel;

class TestimonialController extends Controller
{
    public function getModule()
    {
        $result = TestimonialModel::with(array('lang'))->first();
        $module = json_decode($result);
        TestimonialModel::parseLang($module);
        TestimonialModel::fillMedia($module);
        return response()->json($module);
    }
}
