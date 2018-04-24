<?php

namespace App\Models\Lang;

use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    protected $table = 'apartment_lang';
    public $timestamps = false;

    public static function getObject($id_apartment, $id_lang)
    {
        $apartment = self::where(array(
            array('id_apartment', '=', $id_apartment),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($apartment)) {
            return new Apartment;
        }
        return $apartment;
    }

    public static function existsObject($id_apartment, $id_lang)
    {
        $apartment = self::where(array(
            array('id_apartment', '=', $id_apartment),
            array('id_lang', '=', $id_lang)
        ))->first();

        if (empty($apartment)) {
            return false;
        }
        return $apartment->id_apartment;
    }

    public function save(array $options = array())
    {
        $exists = self::existsObject($this->id_apartment, $this->id_lang);

        if ($exists !== false) {
            return self::where('id_apartment', $this->id_apartment)
                ->where('id_lang', $this->id_lang)
                ->update(array(
                    'name' => $this->name,
                    'description' => $this->description,
                    'short_description' => $this->short_description
                ));
        }
        return parent::save($options);
    }
}
