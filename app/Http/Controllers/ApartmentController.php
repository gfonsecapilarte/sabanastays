<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment as ApartmentModel;
use App\Models\ApartmentType as ApartmentTypeModel;
use App\Models\Amenity as AmenityModel;
use App\Models\Booking as BookingModel;
use App\Models\Building as BuildingModel;
use App\Models\City as CityModel;
use App\Models\State as StateModel;
use App\Models\Country as CountryModel;
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
            ApartmentModel::parseLang($apartment);
            //building
            $apartment->building = BuildingModel::find($apartment->id_building);
            $apartment->building->city = CityModel::find($apartment->building->id_city);
            $apartment->building->state = StateModel::find($apartment->building->city->id_state);
            $apartment->building->country = CountryModel::find($apartment->building->state->id_country);
            //amenities
            foreach ($apartment->amenities as &$amenity) {
                $amenity_result = AmenityModel::where('id_amenity', $amenity->id_amenity)->with('lang')->first();
                $amenity = json_decode($amenity_result);
                AmenityModel::parseLang($amenity);
            }
            AmenityModel::parseLang($apartment->amenities);
            //apartment type
            $apartment_type_result = ApartmentTypeModel::where('id_apartment_type',(int)$apartment->id_apartment_type)->with('lang')->first();
            $apartment->type = json_decode($apartment_type_result);
            ApartmentTypeModel::parseLang($apartment->type);
        }

        return response()->json($apartments);
    }

    public function getApartment(Request $request)
    {
        $apartment_result = ApartmentModel::where('id_apartment', '=', $request->input('id_apartment'))
            ->with(array('amenities', 'lang'))->first();
        $apartment = json_decode($apartment_result);
        ApartmentModel::parseLang($apartment);

        //building
        $apartment->building = BuildingModel::find($apartment->id_building);
        $apartment->building->city = CityModel::find($apartment->building->id_city);
        $apartment->building->state = StateModel::find($apartment->building->city->id_state);
        $apartment->building->country = CountryModel::find($apartment->building->state->id_country);

        //amenities
        foreach ($apartment->amenities as &$amenity) {
            $amenity_result = AmenityModel::where('id_amenity', $amenity->id_amenity)->with('lang')->first();
            $amenity = json_decode($amenity_result);
            AmenityModel::parseLang($amenity);
        }
        AmenityModel::parseLang($apartment->amenities);

        //apartment type
        $apartment_type_result = ApartmentTypeModel::where('id_apartment_type',(int)$apartment->id_apartment_type)->with('lang')->first();
        $apartment->type = json_decode($apartment_type_result);
        ApartmentTypeModel::parseLang($apartment->type);

        return response()->json($apartment);
    }
}
