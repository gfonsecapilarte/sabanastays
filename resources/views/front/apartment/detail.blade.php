@extends('layouts.app')
@section('title', __('general.apartment'))
@section('bodyClass', 'apartment-detail')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/apartment/postheader')
    @stop

    <div class="mg-book-now">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mg-available-rooms">
                    <h3 class="mg-avl-room-title font-white">
                        {{ $apartment->lang->name }}
                        <span>${{ $apartment->price }}<sup></sup>/Night</span>
                    </h3>
                </div>
                <div class="col-md-12">
                    <p>{{ $apartment->lang->description }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt50">
        <div class="row">
            <div class="col-md-12 mg-room-fecilities">
                <h2 class="mg-sec-left-title">@lang('general.amenities')</h2>
                <div class="row">
                    <div class="col-xs-12">
                        <ul>
                            @foreach ($apartment->amenities as $amenity)
                                <li>{{ $amenity->name }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt30">
        <div class="row">
            <div class="col-xs-12">
                <h2 class="mg-sec-left-title">@lang('general.location')</h2>
            </div>
        </div>
    </div>
    <div>
        <div id="mg-map" class="mg-map"></div>
    </div>


@endsection
