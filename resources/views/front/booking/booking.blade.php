@extends('layouts.app')
@section('title',  __('general.booking'))
@section('description',  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
@section('bodyClass', 'booking')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/postheader')
    @stop

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="mg-booking-form">

                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#select-room" aria-controls="select-room" role="tab"><span class="mg-bs-tab-num">1</span><span class="mg-bs-bar"></span>@lang('general.selectApartment')</a>
                            </li>
                            <li role="presentation">
                                <a href="#personal-info" aria-controls="personal-info" role="tab"><span class="mg-bs-tab-num">2</span><span class="mg-bs-bar"></span>@lang('general.yourInformation')</a>
                            </li>
                            <li role="presentation">
                                <a href="#payment" aria-controls="payment" role="tab"><span class="mg-bs-tab-num">3</span>@lang('general.payInformation')</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <!-- Select the apartment -->
                            <div role="tabpanel" class="tab-pane fade in active" id="select-room">
                                @include('front/booking/select-room')
                            </div>

                            <!-- Steps for the booking -->
                            <div role="tabpanel" class="tab-pane fade" id="personal-info">
                                @include('front/booking/personal-info')
                            </div>

                            <div role="tabpanel" class="tab-pane fade" id="payment">
                                @include('front/booking/payment')
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Template to drawn other aptos by Javascript  -->
    @include('front/booking/apto-template')

@endsection
