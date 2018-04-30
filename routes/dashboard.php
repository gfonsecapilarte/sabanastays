<?php

use Illuminate\Http\Request;

Route::get('/dashboard', 'Back\DashboardController@index');

//bookings
Route::get('/dashboard/bookings', 'Back\BookingController@index')->name('dashboard.bookings');

//apartments
Route::get('/dashboard/apartments', 'Back\ApartmentController@index')->name('dashboard.apartments');
Route::get('/dashboard/apartment/create', 'Back\ApartmentController@createApartment')->name('dashboard.apartment.create');
Route::get('/dashboard/apartment/edit', 'Back\ApartmentController@editApartment')->name('dashboard.apartment.edit');

//users
Route::get('/dashboard/users', 'Back\UserController@index')->name('dashboard.users');
Route::get('/dashboard/user/create', 'Back\UserController@createUser')->name('dashboard.user.create');
Route::get('/dashboard/user/edit', 'Back\UserController@editUser')->name('dashboard.user.edit');

//web
Route::get('/dashboard/web', 'Back\WebController@index')->name('dashboard.web');

//roles
Route::get('/dashboard/roles', 'Back\RoleController@index')->name('dashboard.roles');
