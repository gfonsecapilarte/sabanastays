<?php

namespace App\Models\Lang;

use App\Models\Lang\ModuleModel;

class ContactModule extends ModuleModel
{
    protected $table = 'contact_module_lang';
    public $timestamps = false;

    public static function getObject($id_module, $id_lang)
    {
        $module = self::where(array(
            array('id_contact_module', '=', $id_module),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($module)) {
            return new ContactModule;
        }
        return $module;
    }
}
