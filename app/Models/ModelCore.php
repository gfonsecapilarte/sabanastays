<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Language as LanguageModel;

class ModelCore extends Model
{
    public function lang()
    {
        $table = str_replace('_', ' ', $this->table);
        $table = ucwords($table);
        $table = str_replace(' ', '', $table);
        return $this->hasMany('App\Models\Lang\\'.$table, $this->primaryKey);
    }

    public static function parseLang(&$model)
    {
        if (is_array($model)) {
            return self::parseMultiLang($model);
        }
        if (!property_exists($model, 'lang')) {
            return;
        }
        $data = $model->lang;
        $lang = array();
        foreach ($data as $row) {
            $row->iso = LanguageModel::find($row->id_lang)->iso;
            $lang[$row->iso] = $row;
        }
        $model->lang = $lang;
        return json_encode($lang);
    }

    private static function parseMultiLang(&$models)
    {
        foreach ($models as &$model) {
            self::parseLang($model);
        }
        return $models;
    }
}
