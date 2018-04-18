<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Back\CoreController;
use App\Models\Apartment as ApartmentModel;
use App\Models\ApartmentType as ApartmentTypeModel;
use App\Models\Amenity as AmenityModel;
use App\Models\Building as BuildingModel;
use App\Models\Language as LanguageModel;
use App\Models\Currency as CurrencyModel;

class ApartmentController extends CoreController
{
    public function index()
    {
        return $this->display('backoffice/apartment/list');
    }

    public function createApartment()
    {
        return $this->loadApartmentForm();
    }

    public function editApartment(Request $request)
    {
        return $this->loadApartmentForm($request->input('id_apartment'));
    }

    private function loadApartmentForm($id_apartment = null)
    {
        $data = array(
            'apartment_types' => json_decode(ApartmentTypeModel::with('lang')->get()),
            'amenities' => json_decode(AmenityModel::with('lang')->get()),
            'buildings' => json_decode(BuildingModel::with('lang')->get()),
            'languages' => json_decode(LanguageModel::get()),
            'currencies' => json_decode(CurrencyModel::get())
        );
        if (!is_null($id_apartment)) {
            $data['apartment'] = ApartmentModel::find($id_apartment)->with(array('lang','amenities','type', 'building'));
        }

        return $this->display('backoffice/apartment/form', $data);
    }
}
