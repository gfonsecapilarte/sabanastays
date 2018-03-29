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
	Route::get('/','Front\HomeController@index')->name('home');

	/** Load about us page **/
	Route::get(LaravelLocalization::transRoute('routes.about'),'Front\AboutController@index')->name('aboutus');

	/** Get detail of a apto **/
	Route::get(LaravelLocalization::transRoute('routes.apartmentDetail'),'Front\ApartmentController@apartment');

	/** Load booking page **/
	Route::get(LaravelLocalization::transRoute('routes.booking'),'Front\BookingController@loadBookingPage')->name('booking');

	/** Load contact us page **/
	Route::get(LaravelLocalization::transRoute('routes.contactUs'),'Front\ContactController@loadContactPage')->name('contactus');

	/** Load login page **/
	Route::get(LaravelLocalization::transRoute('routes.login'),'Front\UserController@loadLoginPage')->name('login');

	/** Load profile page **/
	Route::get(LaravelLocalization::transRoute('routes.myProfile'),'Front\UserController@loadProfilePage');

	/** Load my bookings **/
	Route::get(LaravelLocalization::transRoute('routes.myBookings'),'Front\BookingController@loadMyBookingPage');

	/** Load Privacy Policy  page **/
	Route::get(LaravelLocalization::transRoute('routes.privacyPolicy'),'Front\PrivacyPolicyController@loadPage')->name('privacyPolicy');

	/** Load Terms of Service  page **/
	Route::get(LaravelLocalization::transRoute('routes.termsService'),'Front\TermsServiceController@loadPage')->name('termsService');









});
