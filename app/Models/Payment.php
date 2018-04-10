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
}
