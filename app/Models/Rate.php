<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    protected $table      = 'rate';
    protected $primaryKey = 'id_rate';
    public $timestamps = false;


    public static function getRateByNights($nights){
        // $sql = self::whereBetween($nights,['from','to'])->toSql();
        return self::whereRaw('? between rate.from and rate.to', [$nights])->first();        
    }

    // public static function getRateByApartment($id_apartment)
    // {
    //     return self::where('id_apartment', '=', $id_apartment)->orderBy('default', 'desc')->first();
    // }

    // public static function updateApartmentRate($id_apartment, $variant)
    // {
    //     //disable rates
    //     self::disableRateByApartment($id_apartment);
    //     //check if apartment
    //     if (self::existsRateApartment($id_apartment, $variant)) {
    //         self::enableRateByApartment($id_apartment, $variant);
    //     } else {
    //         $rate = new Rate();
    //         $rate->variant = $variant;
    //         $rate->id_apartment = $id_apartment;
    //         $rate->name = self::getNameByRate($variant);
    //         $rate->default = 1;
    //         $rate->save();
    //     }
    // }

    // private static function getNameByRate($rate)
    // {
    //     $name = '';
    //     switch ((float)$rate) {
    //         case 0.85:
    //             $name = "Low Season";
    //             break;
    //         case 1.15:
    //             $name = "Hight Season";
    //             break;
    //         case 1.00:
    //             $name = "Default";
    //             break;
    //         case 1.05:
    //             $name = "Referral";
    //             break;
    //         default:
    //             $name = "Unknow";
    //             break;
    //     }
    //     return $name;
    // }

    // private static function existsRateApartment($id_apartment, $rate)
    // {
    //     $result = self::where('id_apartment', '=', $id_apartment)->where('variant', '=', $rate)->first();
    //     return (bool)$result;
    // }

    // private static function disableRateByApartment($id_apartment)
    // {
    //     self::where('id_apartment', '=', $id_apartment)->update(['default' => 0]);
    // }

    // private static function enableRateByApartment($id_apartment, $rate)
    // {
    //     self::where('id_apartment', '=', $id_apartment)->where('variant', '=', $rate)->update(['default' => 1]);
    // }
}
