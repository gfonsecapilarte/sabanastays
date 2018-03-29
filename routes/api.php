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

//settings
Route::get('/languages', 'LanguageController@getLanguages');
Route::get('/currencies', 'CurrencyController@getCurrencies');


//apartments
Route::get('/apartments', 'ApartmentController@getApartments');
Route::get('/apartment', 'ApartmentController@getApartment');

//amenities
Route::get('/amenities', 'AmenityController@getAmenities');

//modules
Route::get('/module/about', 'Module\AboutController@getModule');
Route::get('/module/home', 'Module\HomeController@getModule');
Route::get('/module/home/about', 'Module\HomeAboutController@getModule');
Route::get('/module/header', 'Module\HeaderController@getModule');
//Route::get('/module/footer', 'Module\FooterController@getFooter');
Route::get('/module/testimonial', 'Module\TestimonialController@getModule');
Route::get('/module/contact', 'Module\ContactController@getModule');

//media
Route::get('/media', 'MediaController@getMedia');