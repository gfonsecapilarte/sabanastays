<?php

namespace App\Http\Controllers\Back;

use Illuminate\Http\Request;
use App\Http\Controllers\Back\CoreController;
use App\Models\Building as BuildingModel;
use App\Models\Language as LanguageModel;
use App\Models\City as CityModel;

class BuildingController extends CoreController
{
    public function index()
    {
        return $this->display('backoffice/building/list');
    }

    public function createBuilding()
    {
        return $this->loadBuildingForm();
    }

    public function editBuilding(Request $request)
    {
        return $this->loadBuildingForm($request->input('id_building'));
    }

    private function loadBuildingForm($id_building = null)
    {
        $data = array(
            'cities' => json_decode(CityModel::get()),
            'languages' => json_decode(LanguageModel::get())
        );
        if (!is_null($id_building)) {
            $data['building'] = json_decode(BuildingModel::with(array('city', 'lang'))
                ->where('id_building', '=', $id_building)->get());
            $data['building'] = $data['building'][0];
            BuildingModel::parseLang($data['building']);
        }

        return $this->display('backoffice/building/form', $data);
    }
}
