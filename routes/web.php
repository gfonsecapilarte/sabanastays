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

Route::group(
[
	'prefix' => LaravelLocalization::setLocale(),
	'middleware' => [ 'localize' ]
],
function(){

	/** Load Home **/
	Route::get('/','Front\HomeController@index');

	/** Load abouts page **/
	Route::get(LaravelLocalization::transRoute('routes.about'),'Front\AboutController@index');

	/** Get detail of a apto **/
	Route::get(LaravelLocalization::transRoute('routes.apartmentDetail'),'Front\ApartmentController@apartment');

	/** Load booking page **/
	Route::get(LaravelLocalization::transRoute('routes.booking'),'Front\BookingController@loadBookingPage');

	Route::get(LaravelLocalization::transRoute('routes.contactUs'),function(){
		return view('front/contact-us/contact-us',['locale' => LaravelLocalization::getCurrentLocale()]);
	});

	Route::get(LaravelLocalization::transRoute('routes.login'),function(){
		return view('front/users/login',['locale' => LaravelLocalization::getCurrentLocale()]);
	});

	Route::get(LaravelLocalization::transRoute('routes.myProfile'),function(){
		return view('front/users/profile',['locale' => LaravelLocalization::getCurrentLocale()]);
	});

	Route::get(LaravelLocalization::transRoute('routes.myBookings'),function(){
		return view('front/booking/my-bookings',['locale' => LaravelLocalization::getCurrentLocale()]);
	});
});
