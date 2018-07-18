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
        $data['remove_media'] = json_decode($data['remove_media']);

        if (empty($id_apartment)) {
            $response = $this->createApartment($data);
        } else {
            $response = $this->updateApartment(ApartmentModel::find($id_apartment), $data);
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
        $feature = FeatureModel::getObject($apartment->id_apartment);
        $feature->id_apartment = $apartment->id_apartment;
        $feature->guests = empty($data['features']->guests) ? 0 : $data['features']->guests;
        $feature->bedrooms = empty($data['features']->bedrooms) ? 0 : $data['features']->bedrooms;
        $feature->queen_beds = empty($data['features']->queen_beds) ? 0 : $data['features']->queen_beds;
        $feature->baths = empty($data['features']->baths) ? 0 : $data['features']->baths;
        $feature->king_beds = empty($data['features']->king_beds) ? 0 : $data['features']->king_beds;
        $feature->full_beds = empty($data['features']->full_beds) ? 0 : $data['features']->full_beds;
        $feature->twin_beds = empty($data['features']->twin_beds) ? 0 : $data['features']->twin_beds;
        $feature->save();
        //rate
        RateModel::updateApartmentRate($apartment->id_apartment, ($data['rate']==-1)?"1.00":$data['rate']);
        //amenities
        foreach ($data['amenities'] as $row_amenity) {
            ApartmentAmenityModel::updateApartmentAmenity($apartment->id_apartment, $row_amenity->id_amenity, (bool)$row_amenity->checked);
        }
        //media
        if (array_key_exists('media', $data) && is_array($data['media']) && !empty($data['media'])) {
            foreach ($data['media'] as $file) {
                $filename = uniqid('ss').'.'.$file->getClientOriginalExtension();
                $file->move(storage_path('app/public/'), $filename);

                $media = new MediaModel();
                $media->path = Storage::url($filename);
                $media->media_type = 'IMAGE';
                $media->id_type = $apartment->id_apartment;
                $media->type = 'apartment';
                $media->save();
            }
        }

        //remove media
        if (array_key_exists('remove_media', $data) && is_array($data['remove_media']) && !empty($data['remove_media'])) {
            foreach ($data['remove_media'] as $remove_file) {
                $remove_media = MediaModel::find($remove_file->id_media);
                if (!empty($remove_media)) {
                    $remove_filename = str_replace('/storage/', '', $remove_media->path);
                    Storage::disk('public')->delete($remove_filename);
                    $remove_media->delete();
                }
            }
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
        }
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
//                $apartment->price += ($apartment->price * ($rate->variant / 100));
                $apartment->price *= (float)$rate->variant;
            }
            $apartment->price = number_format($apartment->price, 2);
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
//            $apartment->price += ($apartment->price * ($rate->variant / 100));
            $apartment->price *= (float)$rate->variant;
        }
        $apartment->price = number_format($apartment->price, 2);

        //media
        $apartment->sliders = MediaModel::getMediaByType($apartment->id_apartment, 'apartment');

        return response()->json($apartment);
    }
}
