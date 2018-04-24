<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment as ApartmentModel;
use App\Models\Lang\Apartment as ApartmentLangModel;
use App\Models\ApartmentType as ApartmentTypeModel;
use App\Models\ApartmentAmenity as ApartmentAmenityModel;
use App\Models\Amenity as AmenityModel;
use App\Models\Booking as BookingModel;
use App\Models\Building as BuildingModel;
use App\Models\City as CityModel;
use App\Models\State as StateModel;
use App\Models\Country as CountryModel;
use App\Models\Media as MediaModel;
use App\Models\Rate as RateModel;
use App\Models\Feature as FeatureModel;
//use Illuminate\Support\Facades\DB;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class ApartmentController extends Controller
{

    public function getTypes()
    {
        $types_result = ApartmentTypeModel::with('lang')->get();
        $types = json_decode($types_result);
        ApartmentTypeModel::parseLang($types);
        return response()->json($types);
    }

    public function saveApartment(Request $request)
    {
        $id_apartment = $request->input('id_apartment');
        $response = false;
        $data = $request->all();

        $data['information'] = json_decode($data['information']);
        $data['features'] = json_decode($data['features']);
        $data['amenities'] = json_decode($data['amenities']);
        $data['settings'] = json_decode($data['settings']);
        $data['rate'] = json_decode($data['rate']);
        $data['pricing'] = json_decode($data['pricing']);

        if (empty($id_apartment)) {
            $response = $this->createApartment($data);
        } else {
            $response = $this->updateApartment(ApartmentModel::find($id_apartment)->first(), $data);
        }

        return response()->json(array(
            'success' => (bool)$response,
            'id_apartment' => $response
        ));
    }

    private function createApartment($data)
    {
        return $this->updateApartment(new ApartmentModel, $data);
    }

    private function updateApartment($apartment, $data)
    {
        //settings
        $apartment->id_apartment_type = $data['settings']->id_apartment_type;
        $apartment->id_building = $data['settings']->id_building;
        $apartment->floor = $data['settings']->floor;
        $apartment->number = $data['settings']->number;
        //pricing
        foreach ($data['pricing'] as $id_currency => $pricing) {
            if (empty($pricing)) {
                continue;
            }
            $apartment->id_currency = $id_currency;
            $apartment->price = (float)$pricing->value;
            break;
        }
        $apartment->save();
        //lang
        foreach ($data['information'] as $id_language => $information) {
            if (empty($information)) {
                continue;
            }
            $apartment_lang = ApartmentLangModel::getObject($apartment->id_apartment, $id_language);
            $apartment_lang->id_apartment = $apartment->id_apartment;
            $apartment_lang->id_lang = $id_language;
            $apartment_lang->name = $information->name;
            $apartment_lang->description = $information->description;
            $apartment_lang->short_description = $information->short_description;
            $apartment_lang->save();
        }
        //features
//        foreach ($data['features'] as $row_feature) {
            $feature = FeatureModel::getObject($apartment->id_apartment);
            $feature->id_apartment = $apartment->id_apartment;
            $feature->guests = $data['features']->guests;
            $feature->bedrooms = $data['features']->bedrooms;
            $feature->queen_beds = $data['features']->queen_beds;
            $feature->baths = $data['features']->baths;
            $feature->king_beds = $data['features']->king_beds;
            $feature->full_beds = $data['features']->full_beds;
            $feature->twin_beds = $data['features']->twin_beds;
            $feature->save();
//        }
        //rate
        RateModel::updateApartmentRate($apartment->id_apartment, $data['rate']);
        //amenities
        foreach ($data['amenities'] as $row_amenity) {
            ApartmentAmenityModel::updateApartmentAmenity($apartment->id_apartment, $row_amenity->id_amenity, (bool)$row_amenity->checked);
        }
        //media
//        $apartment_dir = Storage::directories('/app/public');
//        Storage::putFile('media', new File('/app/public/apartments'));
//        $url = Storage::url('file.jpg');
        foreach ($data['media'] as $file) {
            $filename = uniqid('ss').'.'.$file->getClientOriginalExtension();

            $file->move(storage_path('app/public/'), $filename);

//            Storage::putFileAs($file, new File(storage_path('app/public/')), $filename);
            $media = new MediaModel();
            $media->path = Storage::url($filename);
            $media->media_type = 'IMAGE';
            $media->id_type = $apartment->id_apartment;
            $media->type = 'apartment';
            $media->save();
        }

        //return
        return $apartment->id_apartment;
    }

    public function listApartments(Request $request)
    {
        $apartments = array();
        if ($request->has('term')) {
            $apartments = ApartmentModel::where('id_apartment', '=', $request->input('term'))
                ->with(array('amenities', 'type', 'currency', 'lang', 'building'))->paginate($request->input('items_per_page', 15));
        } else {
            $apartments = ApartmentModel::with(array('amenities', 'type', 'currency', 'lang', 'building'))->paginate($request->input('items_per_page', 15));
//            $apartments = ApartmentModel::with(array('amenities'))->paginate($request->input('items_per_page', 15));
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
