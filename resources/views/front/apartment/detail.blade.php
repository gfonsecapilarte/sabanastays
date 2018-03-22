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
                        Super Deluxe<span>$249<sup>.99</sup>/Night</span>
                    </h3>
                </div>
                <div class="col-md-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae molestie orci. Nulla fringilla nisi vitae commodo lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer luctus egestas est at commodo. Nunc at sollicitudin risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ut sem est. Duis molestie, velit sit amet porttitor suscipit, augue justo rutrum orci, non pharetra mi eros sit amet eros. Morbi maximus eu nunc vitae tempor. Ut faucibus neque a mi tempus scelerisque. Phasellus in metus ac orci placerat porta. Fusce gravida tempor justo, ac mattis tortor malesuada euismod. Donec eleifend fermentum magna eu accumsan. Sed dictum ante at augue ullamcorper maximus.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container mg-features">
        <div class="row">
            <div class="col-md-12 mg-room-fecilities">
                <h2 class="mg-sec-left-title">@lang('general.amenities')</h2>
                <div class="row">
                    <div class="col-xs-4">
                        <ul>
                            <li><i class="fp-ht-tv"></i> TV</li>
                            <li><i class="fp-ht-washingmachine"></i> In-Suite Laundry</li>
                            <li><i class="sa-icon-high-chair"></i> High Chair (Upon request)</li>
                            <li><i class="fa fa-bed"></i> Extra Beds (Upon request)</li>
                            <li><i class="fp-ht-bed29"></i> Bed Linens And Towels</li>
                        </ul>
                    </div>
                    <div class="col-xs-4">
                        <ul>
                            <li><i class="fa fa-paw"></i> Pet Friendly</li>
                            <li><i class="fa fa-wifi"></i> Internet</li>
                            <li><i class="sa-icon-firstdraft"></i> Hardwood Floor</li>
                            <li><i class="sa-icon-city"></i> City View</li>
                            <li><i class="sa-icon-air"></i> Air Conditioning</li>
                        </ul>
                    </div>
                    <div class="col-xs-4">
                        <ul>
                            <li><i class="fp-ht-nosmoking"></i> Non Smoking</li>
                            <li><i class="sa-icon-clean"></i> Housekeeping</li>
                            <li><i class="fp-ht-bed29"></i> Extra Linens (Upon request)</li>
                            <li><i class="fa fa-bed"></i> Baby Crib (Upon request)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="mg-sec-left-title">@lang('general.location')</h2>
                </div>
            </div>
        </div>
        <div>
            <div id="mg-map" class="mg-map"></div>
        </div>
    </div>

@endsection
