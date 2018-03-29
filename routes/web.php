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

	/** Load contact us page **/
	Route::get(LaravelLocalization::transRoute('routes.contactUs'),'Front\ContactController@loadContactPage');

	/** Load login page **/
	Route::get(LaravelLocalization::transRoute('routes.login'),'Front\UserController@loadLoginPage');

	/** Load profile page **/
	Route::get(LaravelLocalization::transRoute('routes.myProfile'),'Front\UserController@loadProfilePage');

	/** Load my bookings **/
	Route::get(LaravelLocalization::transRoute('routes.myBookings'),'Front\BookingController@loadMyBookingPage');
});
