<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table      = 'payment';
    protected $primaryKey = 'id_payment';

    //payment type
    const ONETIME = 'ONETIME';
    const RECURRENT = 'RECURRENT';

    //payment method
    const CREDIT_CARD = 'CREDIT CARD';
    const CHECK = 'CHECK';
    const WIRE_TRANSFER = 'WIRE TRANSFER';
    const CASH = 'CASH';

    /**
     * Associations
     */

//    public function booking()
//    {
//        return $this->belongsTo(\App\Models\Booking::class, 'id_booking');
//    }

    public function currency()
    {
        return $this->belongsTo(\App\Models\Currency::class, 'id_currency');
    }
}
