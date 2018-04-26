<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class ModuleModel extends Model
{
    public static function existsObject($key, $id_module, $id_lang)
    {
        $module = self::where(array(
            array($key, '=', $id_module),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($module)) {
            return false;
        }
        return $module->{$key};
    }

    public function save(array $options = array(), $key = null, $data = array())
    {
        $exists = self::existsObject($key, $this->{$key}, $this->id_lang);

        if ($exists !== false) {
            return self::where($key, $this->{$key})
                ->where('id_lang', $this->id_lang)
                ->update($data);
        }
        return parent::save($options);
    }
}
