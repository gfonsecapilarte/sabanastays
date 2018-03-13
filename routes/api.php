<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * User functions
 */

Route::post('/user', 'Auth\RegisterController@create');//Register
Route::post('/user/login', 'Auth\LoginController@credentials');//Login
//Route::post('/user', function ($request) {
//    echo "<pre>";
//    print_r($request);
//    echo "</pre>";
//    die();
//});

Route::get('/apartments', 'ApartmentController@getApartments');