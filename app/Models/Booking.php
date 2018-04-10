<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Booking extends Model
{
    protected $table      = 'booking';
    protected $primaryKey = 'id_booking';

    const RESERVED = 'RESERVED';
    const PAID = 'PAID';
    const CANCELLED = 'CANCELLED';
    const UNAVAILABLE = 'UNAVAILABLE';

    public static function getBookingsByDate($checkin, $checkout, $type = null)
    {
        $query = self::getByDate($checkin, $checkout);

        if (!is_null($type)) {
            $query->join('apartment', 'apartment.id_apartment', '=', 'booking.id_apartment');
            $query->where('apartment.id_apartment_type', '=', $type);
        }

        return $query->get();
    }

    public static function getApartmentAvailability($id_apartment, $checkin, $checkout)
    {
        $query = self::getByDate($checkin, $checkout);
        $query->where('id_apartment', '=', $id_apartment);

        $result = $query->first();

        return empty($result);
    }

    private static function getByDate($checkin, $checkout)
    {
        $query = DB::table('booking')->select('booking.id_apartment')
            ->where(function($where) use ($checkin, $checkout) {
                return $where->where(array(
                        array('booking.booking_date_start', '<=', $checkin),
                        array('booking.booking_date_end', '>', $checkin)
                    ))
                    ->orWhere(array(
                        array('booking.booking_date_start', '<', $checkout),
                        array('booking.booking_date_end', '>=', $checkout)
                    ))
                    ->orWhere(array(
                        array('booking.booking_date_start', '>', $checkin),
                        array('booking.booking_date_end', '<', $checkout)
                ));
                })
            ->where(
                function($where) {
                    $where->whereNull('booking.status')->orWhereIn('booking.status', array('PAID', 'RESERVED'));
                }
            );

        return $query;
    }
}
