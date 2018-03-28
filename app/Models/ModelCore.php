<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Language as LanguageModel;
use App\Models\Media as MediaModel;

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
            if (property_exists($row, 'id_media')) {
                self::fillMedia($row, 'id_media');
            }
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

    public static function fillMedia(&$model, $keys = 'id_media')
    {
        if (is_array($model)) {
            foreach ($model as &$m) {
                self::fillMedia($m, $keys);
            }
            return;
        }
        if (is_null($keys)) {
            return;
        }
        if (!is_array($keys)) {
            $keys = array($keys);
        }
        foreach ($keys as $key) {
            $k = str_replace('id_', '', $key);
            if (property_exists($model, $key) && !empty($model->{$key}) && !is_null($model->{$key})) {
                $model->{$k} = MediaModel::getMediaById($model->{$key});
            } else {
                $model->{$k} = null;
            }
        }
    }
}
