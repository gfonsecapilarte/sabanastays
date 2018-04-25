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

    <div class="container">
        <hr class="mb50 mt0">
        <div class="row">
            <div class="col-md-12">
                <div class="mg-tab-top-nav">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#paid" aria-controls="home12" role="tab" data-toggle="tab">
                                <i class="fa fa-check"></i> @lang('general.paid')
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#profile12" aria-controls="profile12" role="tab" data-toggle="tab">
                                <i class="fa fa-spinner"></i> @lang('general.incompleted')
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">

                        <!-- PAID APARTMENTS -->
                        <div role="tabpanel" class="tab-pane fade in active" id="paid">
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

    @include('front/booking/my-bookings/apto-template')

@endsection
