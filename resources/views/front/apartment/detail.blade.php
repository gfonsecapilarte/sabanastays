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

    <script>
        var saLatitude  = {{ $apartment->building->lat }};
        var saLongitude = {{ $apartment->building->lng }};
    </script>

    <div class="mg-book-now">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mg-available-rooms">
                    <h3 class="mg-avl-room-title font-white">
                        {{ $apartment->lang->name }}
                        <span><span class="currency-sign"></span>{{ $apartment->price }}<sup></sup>/Night</span>
                    </h3>
                </div>
                <div class="col-md-12">
                    <p>{{ $apartment->lang->description }}</p>
                </div>
            </div>
            <div class="row" >
                <a href="{{ route('booking') }}/{{ $apartment->lang->id_apartment }}" class="btn btn-main pull-right">@lang('general.bookApartment')</a>
                <a href="{{ route('booking') }}" class="btn btn-main pull-right mr10">@lang('general.comeBack')</a>
            </div>
        </div>
    </div>

    <div class="container mt50">
        <div class="row">
            <div class="col-md-12 mg-room-fecilities">
                <h2 class="mg-sec-left-title">@lang('general.features')</h2>
                <div class="row">
                    <div class="col-xs-12">
                        <ul>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->guests }}</b> @lang('general.guests')</li>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->bedrooms }}</b> @lang('general.bedrooms')</li>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->queen_beds }}</b> @lang('general.queenbeds')</li>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->baths }}</b> @lang('general.baths')</li>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->king_beds }}</b> @lang('general.kingbeds')</li>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->full_beds }}</b> @lang('general.fullbeds')</li>                            
                            <li><i class=""></i> <b>{{ $apartment->feature->twin_beds }}</b> @lang('general.twinbeds')</li>                            
                        </ul>
                    </div>
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
                                <li><i class="{{ $amenity->icon }}"></i> {{ $amenity->lang->name }}</li>
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
