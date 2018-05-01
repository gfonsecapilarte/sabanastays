<?php

namespace App\Http\Controllers\Module;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\Contact as ContactModel;
use App\Models\Lang\ContactModule as ContactModuleLang;

class ContactController extends Controller
{
    public function getModule()
    {
        $result = ContactModel::with('lang')->first();
        $module = json_decode($result);
        ContactModel::parseLang($module);
        return response()->json($module);
    }

    public function saveModule(Request $request)
    {
        $id_module = $request->input('id_contact_module');
        $data = $request->all();

        $module = null;
        if (!empty($id_module)) {
            $module = ContactModel::find($id_module)->first();
        } else {
            $module = new ContactModel();
        }
        $module->lat = json_decode($data['lat']);
        $module->lng = json_decode($data['lng']);
        $module->save();
        //lang
        $data_information = json_decode($data['information']);
        foreach ($data_information as $id_language => $information) {
            if (empty($information)) {
                continue;
            }
            $module_lang = ContactModuleLang::getObject($module->id_contact_module, $id_language);
            $module_lang->id_contact_module = $module->id_contact_module;
            $module_lang->id_lang = $id_language;
            $module_lang->title = $information->title;
            $module_lang->description = $information->description;
            $module_lang->address = $information->address;
            $module_lang->phone = $information->phone;
            $module_lang->email = $information->email;
            $module_lang->save(
                array(),
                'id_contact_module',
                array(
                    'title' => $module_lang->title,
                    'description' => $module_lang->description,
                    'address' => $module_lang->address,
                    'phone' => $module_lang->phone,
                    'email' => $module_lang->email
                )
            );
        }

        return response()->json(array(
            'success' => true,
            'id_contact_module' => $module->id_contact_module
        ));
    }
}
