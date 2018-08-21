<?php

use Illuminate\Http\Request;

Route::get('/dashboard', 'Back\DashboardController@index')->name('dashboard');

//summary
Route::get('/dashboard/summary', 'Back\DashboardController@index')->name('dashboard.summary');

//bookings
Route::get('/dashboard/bookings', 'Back\BookingController@index')->name('dashboard.bookings');

//apartments
Route::get('/dashboard/apartments', 'Back\ApartmentController@index')->name('dashboard.apartments');
Route::get('/dashboard/apartment/create', 'Back\ApartmentController@createApartment')->name('dashboard.apartment.create');
Route::get('/dashboard/apartment/edit', 'Back\ApartmentController@editApartment')->name('dashboard.apartment.edit');

//rates
Route::get('/dashboard/rates', 'Back\RateController@index')->name('dashboard.rates');
Route::get('/dashboard/rates/create', 'Back\RateController@createRate')->name('dashboard.rate.create');
Route::get('/dashboard/rates/edit', 'Back\RateController@editRate')->name('dashboard.rate.edit');

//building
Route::get('/dashboard/buildings', 'Back\BuildingController@index')->name('dashboard.buildings');
Route::get('/dashboard/building/create', 'Back\BuildingController@createBuilding')->name('dashboard.building.create');
Route::get('/dashboard/building/edit', 'Back\BuildingController@editBuilding')->name('dashboard.building.edit');

//users
Route::get('/dashboard/users', 'Back\UserController@index')->name('dashboard.users');
Route::get('/dashboard/user/create', 'Back\UserController@createUser')->name('dashboard.user.create');
Route::get('/dashboard/user/edit', 'Back\UserController@editUser')->name('dashboard.user.edit');
Route::get('/administrators/login', 'Back\DashboardController@index');
Route::get('/administrators/login',function(){
	return view('backoffice/user/login');
})->name('adminlogin');

//web
Route::get('/dashboard/web', 'Back\WebController@index')->name('dashboard.web');

//roles
Route::get('/dashboard/roles', 'Back\RoleController@index')->name('dashboard.roles');
