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
function()
{

	/** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/
	Route::get('/', function()
	{
		return view('front/home/index',[
			'locale' => LaravelLocalization::getCurrentLocale(),
			'languages'	=> App\Models\Language::all()
		]);
	});

	Route::get(LaravelLocalization::transRoute('routes.about'),function(){
		return view('front/about-us/about-us',['locale' => LaravelLocalization::getCurrentLocale()]);
	});

	/*
	 * Get detail of Apto
	 */
	Route::get(LaravelLocalization::transRoute('routes.apartmentDetail'),'Front\ApartmentController@apartment');

	/*
	 * Result of a searching to find aptos
	 * - Sent locale, languages
	 */
	Route::get(LaravelLocalization::transRoute('routes.booking'),function(){
		return view('front/booking/booking',[
			'locale' 	=> LaravelLocalization::getCurrentLocale(),
			'languages'	=> App\Models\Language::all()
		]);
	});

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
