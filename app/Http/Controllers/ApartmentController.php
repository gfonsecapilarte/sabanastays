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
use App\Models\Media as MediaModel;
use App\Models\Rate as RateModel;
//use Illuminate\Support\Facades\DB;

class ApartmentController extends Controller
{

    public function getTypes()
    {
        $types_result = ApartmentTypeModel::with('lang')->get();
        $types = json_decode($types_result);
        ApartmentTypeModel::parseLang($types);
        return response()->json($types);
    }

    public function listApartments(Request $request)
    {
        $apartments = array();
        if ($request->has('term')) {
            $apartments = ApartmentModel::where('id_apartment', '=', $request->input('term'))
                ->with(array('amenities', 'type', 'currency', 'lang', 'building'))->paginate($request->input('items_per_page', 15));
        } else {
            $apartments = ApartmentModel::with(array('amenities', 'type', 'currency', 'lang', 'building'))->paginate($request->input('items_per_page', 15));
        }

//        foreach ($apartments as &$apartment) {
//            $apartment = ApartmentModel::parseLang($apartment);
//            $apartment->type = ApartmentModel::parseLang($apartment->type);
//            $apartment->amenities = ApartmentModel::parseLang($apartment->amenities);
//        }
        return response()->json(array(
            'success' => true,
            'apartments' => $apartments
        ));
    }

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

        //pagination
        $total = $query_apartments->get()->count();
        $page = 1;
        $items_per_page = 5;
        if ($request->has('page')) {
            $page = $request->input('page');
            $items_per_page = $request->has('items_per_page') ? $request->input('items_per_page') : 5;
            $query_apartments->paginate($items_per_page);
        }
        $total_pages = ceil($total / $items_per_page);

        //get apartments
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
            //thumbnail
            $apartment->thumbnail = MediaModel::getFirstMediaByType($apartment->id_apartment, 'apartment');
            //rate variant
            $rate = RateModel::getRateByApartment($apartment->id_apartment);
            if (!empty($rate)) {
                $apartment->price += ($apartment->price * ($rate->variant / 100));
            }
        }

        return response()->json(array(
            'pagination' => array(
                'total' => $total,
                'page' => $page,
                'pages' => $total_pages,
                'items_per_page' => $items_per_page
            ),
            'apartments' => $apartments
        ));
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

        //rate variant
        $rate = RateModel::getRateByApartment($apartment->id_apartment);
        if (!empty($rate)) {
            $apartment->price += ($apartment->price * ($rate->variant / 100));
        }

        //media
        $apartment->sliders = MediaModel::getMediaByType($apartment->id_apartment, 'apartment');

        return response()->json($apartment);
    }
}
