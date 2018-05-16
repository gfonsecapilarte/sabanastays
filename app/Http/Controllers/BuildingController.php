<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Building as BuildingModel;
use App\Models\Lang\Building as BuildingLangModel;

class BuildingController extends Controller
{
    public function getBuildings(Request $request)
    {
        //pagination
        $result = BuildingModel::with(array('lang', 'city'))->paginate($request->input('items_per_page', 15))->toArray();
        $buildings = $result['data'];

        return response()->json(array(
            'pagination' => array(
                'total' => $result['total'],
                'page' => $result['current_page'],
                'pages' => $result['last_page'],
                'items_per_page' => $result['per_page']
            ),
            'buildings' => $buildings
        ));
    }

    /**
     * List buildings
     */
    public function listBuildings(Request $request)
    {
        $buildings = array();
        if ($request->has('term')) {
            $buildings = BuildingModel::where('id_building', '=', $request->input('term'))
                ->orWhere('postal', '=', $request->input('term'))
                ->paginate($request->input('items_per_page', 15))->toArray();
        } else {
            $buildings = BuildingModel::with(array('lang', 'city'))->paginate($request->input('items_per_page', 15))->toArray();
        }

        return response()->json(array(
            'success' => true,
            'buildings' => $buildings['data']
        ));
    }

    public function getBuilding(Request $request)
    {
        $building_result = BuildingModel::where('id_building', '=', $request->input('id_building'))
            ->with(array('lang', 'city'))->first();
        $building = json_decode($building_result);
        BuildingModel::parseLang($building);

        return response()->json($building);
    }

    public function saveBuilding(Request $request)
    {
        $id_building = $request->input('id_building');
        $response = false;
        $data = $request->all();

        $data['information'] = json_decode($data['information']);
        $data['settings'] = json_decode($data['settings']);

        if (empty($id_building)) {
            $response = $this->createBuilding($data);
        } else {
            $response = $this->updateBuilding(BuildingModel::find($id_building), $data);
        }

        return response()->json(array(
            'success' => (bool)$response,
            'id_building' => $response
        ));
    }

    private function createBuilding($data)
    {
        return $this->updateBuilding(new BuildingModel, $data);
    }

    private function updateBuilding($building, $data)
    {
        //settings
        $building->address = $data['settings']->address;
        $building->postal_code = $data['settings']->postal_code;
        $building->id_city = $data['settings']->id_city;
        $building->lat = null;//$data['settings']->lat;
        $building->lng = null;//$data['settings']->lng;
        $building->save();
        //lang
        foreach ($data['information'] as $id_language => $information) {
            if (empty($information)) {
                continue;
            }
            $building_lang = BuildingLangModel::getObject($building->id_building, $id_language);
            $building_lang->id_building = $building->id_building;
            $building_lang->id_lang = $id_language;
            $building_lang->name = $information->name;
            $building_lang->description = $information->description;
            $building_lang->save();
        }

        //return
        return $building->id_building;
    }
}
