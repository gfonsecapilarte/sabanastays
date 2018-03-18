<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::group(['prefix' => LaravelLocalization::setLocale()], function()
// {
//
// 	Route::get('/', function()
// 	{
// 		return view('front/home/index');
// 	});
//
//     Route::get('/about-us', function(){
//        return view('front/about-us/about-us');
//     });
//
// });

Route::group(
[
	'prefix' => LaravelLocalization::setLocale(),
	'middleware' => [ 'localize' ]
],
function()
{

	/** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/
	Route::get('/', function()
	{
		return view('front/home/index',['locale' => LaravelLocalization::getCurrentLocale()]);
	});

	Route::get(LaravelLocalization::transRoute('routes.about'),function(){
		return view('front/about-us/about-us',['locale' => LaravelLocalization::getCurrentLocale()]);
	});
});


// Route::get('/', function(){
//     return view('front/home/index');
// });
//
// Route::get('/apartment-detail', function(){
//     return view('front/apartment/detail');
// });
//
// Route::get('/booking', function(){
//     return view('front/booking/booking');
// });
//
// Route::get('/my-bookings', function(){
//     return view('front/booking/my-bookings');
// });
//
// Route::get('/contact-us', function(){
//     return view('front/contact-us/contact-us');
// });
//
// Route::get('/about-us', function(){
//     return view('front/about-us/about-us');
// });
//
// Route::get('/login', function(){
//     return view('front/users/login');
// });
//
// Route::get('/profile', function(){
//     return view('front/users/profile');
// });
