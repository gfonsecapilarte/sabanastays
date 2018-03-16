<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment as ApartmentModel;
use App\Models\ApartmentType as ApartmentTypeModel;
use App\Models\Amenity as AmenityModel;
use App\Models\Booking as BookingModel;
use Illuminate\Support\Facades\DB;

class ApartmentController extends Controller
{
    //

    public function getApartments(Request $request)
    {
        $filter = $request->all();
        $result = BookingModel::getBookingsByDate($filter['checkin'], $filter['checkout'], $request->has('type') ? $filter['type'] : null);
        $result_bookings = json_decode($result);
        $ids_apartment_booked = array();
        foreach ($result_bookings as $row) {
            $ids_apartment_booked[] = $row->id_apartment;
        }

        $query_apartments = ApartmentModel::whereNotIn('id_apartment', $ids_apartment_booked)
            ->with(array('amenities', 'lang'));

        if ($request->has('type')) {
            $query_apartments->where('id_apartment_type', '=', $filter['type']);
        }

        $available_apartments = $query_apartments->get();


        $apartments = json_decode($available_apartments);

        foreach ($apartments as &$apartment) {
            foreach ($apartment->amenities as &$amenity) {
                $amenity = AmenityModel::where('id_amenity', $amenity->id_amenity)->with('lang')->get();
            }
            $apartment->type = ApartmentTypeModel::where('id_apartment_type',(int)$apartment->id_apartment_type)->with('lang')->first();
        }

        return $apartments;
    }

    public function getApartment(Request $request)
    {
        $apartment = ApartmentModel::where('id_apartment', '=', $request->input('id_apartment'))
            ->with(array('amenities', 'lang'))->first();
        
        foreach ($apartment->amenities as $i => $amenity) {
            $apartment->amenities[$i] = AmenityModel::where('id_amenity', $amenity->id_amenity)->with('lang')->get();
        }
        $apartment->type = ApartmentTypeModel::where('id_apartment_type',(int)$apartment->id_apartment_type)->with('lang')->first();

        return $apartment;
    }
}
