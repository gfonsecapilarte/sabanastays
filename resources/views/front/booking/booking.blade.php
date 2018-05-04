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

    <script>
        var apartmentWarning    = '{{ __('general.apartmentWarning') }}';
        var infoUserWarning     = '{{ __('general.infoUserWarning') }}';
        var adrressWarning      = '{{ __('general.adrressWarning') }}';
        var attempt             = '{{ __('general.attempt') }}';
        var _apartments         = [];
        var myBookingsLink      = '{{ route("bookings") }}';
    </script>

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="mg-booking-form">

                        @include('messages/success')
                        @include('messages/error')

                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#select-room" aria-controls="select-room" role="tab"><span class="mg-bs-tab-num">1</span><span class="mg-bs-bar"></span>@lang('general.selectApartment')</a>
                            </li>
                            <li role="presentation">
                                <a href="#personal-info-form" aria-controls="personal-info-form" role="tab"><span class="mg-bs-tab-num">2</span><span class="mg-bs-bar"></span>@lang('general.yourInformation')</a>
                            </li>
                            <li role="presentation">
                                <a href="#address-form" aria-controls="address-form" role="tab"><span class="mg-bs-tab-num">3</span><span class="mg-bs-bar"></span>@lang('general.address')</a>
                            </li>
                            <li role="presentation">
                                <a href="#payment-form" aria-controls="payment-form" role="tab"><span class="mg-bs-tab-num">4</span>@lang('general.payInformation')</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <!-- Select the apartment -->
                            <div role="tabpanel" class="tab-pane fade in active" id="select-room">
                                @include('front/booking/select-room')
                            </div>

                            <!-- Step for the personal information -->
                            <div role="tabpanel" class="tab-pane fade" id="personal-info-form">
                                @include('front/booking/personal-info')
                            </div>

                            <!-- Step for the address -->
                            <div role="tabpanel" class="tab-pane fade" id="address-form">
                                @include('front/booking/user-address')
                            </div>

                            <div role="tabpanel" class="tab-pane fade" id="payment-form">
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
