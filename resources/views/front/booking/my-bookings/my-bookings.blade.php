@extends('layouts.app')
@section('title',  __('general.myBookings'))
@section('bodyClass', 'my-bookings')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/postheader')
    @stop

    <!-- <script>
        var paypalKeySandbox  = '{{ env('PAYPAL_SANDBOX') }}';
        var paypalKeyProduction  = '{{ env('PAYPAL_PRODUCTION') }}';
    </script> -->
    <div class="container">
        <hr class="mb50 mt0">
        <div class="row">
            <div class="col-md-12">
                <div class="mg-tab-top-nav">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#upcoming" aria-controls="home12" role="tab" data-toggle="tab">
                                <i class="fa fa-spinner"></i> @lang('general.upComing')
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#completed" aria-controls="profile12" role="tab" data-toggle="tab">
                                <i class="fa fa-calendar-check-o"></i> @lang('general.completed')
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#cancelled" aria-controls="profile12" role="tab" data-toggle="tab">
                                <i class="fa fa-calendar-times-o"></i> @lang('general.cancelled')
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">

                        <!-- UPCOMING BOOKINGS -->
                        <div role="tabpanel" class="tab-pane fade in active" id="upcoming">
                            <div class="mg-available-rooms">
                                <div class="mg-avl-rooms">
                                </div>
                            </div>
                        </div>

                        <!-- COMPLETED BOOKINGS -->
                        <div role="tabpanel" class="tab-pane fade in active" id="completed">
                            <div class="mg-available-rooms">
                                <div class="mg-avl-rooms">
                                </div>
                            </div>
                        </div>

                        <!-- CANCELLED BOOKINGS -->
                        <div role="tabpanel" class="tab-pane fade in active" id="cancelled">
                            <div class="mg-available-rooms">
                                <div class="mg-avl-rooms">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('front/booking/my-bookings/booking-template')

@endsection
