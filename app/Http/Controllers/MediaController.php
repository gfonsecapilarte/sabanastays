<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Media as MediaModel;

class MediaController extends Controller
{
    public function getMedia(Request $request)
    {
        $result = MediaModel::getMediaById($request->input('id_media'));
        $media = json_decode($result);
        MediaModel::parseLang($media);
        return json_encode($media);
    }
}
