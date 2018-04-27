<?php

namespace App\Models\Lang;

use App\Models\Lang\ModuleModel;

class AboutModule extends ModuleModel
{
    protected $table = 'about_module_lang';
    public $timestamps = false;

    public static function getObject($id_module, $id_lang)
    {
        $module = self::where(array(
            array('id_about_module', '=', $id_module),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($module)) {
            return new AboutModule;
        }
        return $module;
    }
}
