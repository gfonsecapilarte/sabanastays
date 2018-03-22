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
                            <a href="#upcoming" aria-controls="home12" role="tab" data-toggle="tab">
                                <i class="fa fa-spinner"></i> @lang('general.upComing')
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#profile12" aria-controls="profile12" role="tab" data-toggle="tab">
                                <i class="fa fa-check"></i> @lang('general.completed')
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#settings12" aria-controls="settings12" role="tab" data-toggle="tab">
                                <i class="fa fa-times"></i> @lang('general.cancelled')
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="upcoming">
                            <div class="mg-available-rooms">

                                <div class="mg-avl-rooms">
                                    <div class="mg-avl-room">
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src="{{ asset('images/room-1.png') }}" alt="" class="img-responsive"></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h3 class="mg-avl-room-title"><a href="#">Torre Rohrmoser</a></h3>
                                                <div class="row mg-room-fecilities">
                                                    <div class="col-sm-6">
                                                        <ul>
                                                            <li>@lang('general.bookingId'): 4421577545</li>
                                                            <li>@lang('general.paid'): <span>$249.99</span></li>
                                                        </ul>
                                                        <h3 class="mg-avl-room-title">Junior Suite</h3>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                @lang('general.checkIn')
                                                                <div class="sa-date">
                                                                    <span class="day">2</span>
                                                                    <span>Mar 18 Monday</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                @lang('general.checkOut')
                                                                <div class="sa-date">
                                                                    <span class="day">6</span>
                                                                    <span>Mar 18 Monday</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 booking-detail">
                                                <div class="mg-features pt20">
                                                    <h2 class="mg-sec-left-title">@lang('general.amenities')</h2>
                                                    <div class="row">
                                                        <div class="col-xs-4 mg-room-fecilities">
                                                            <ul>
                                                                <li><i class="fp-ht-tv"></i> TV</li>
                                                                <li><i class="fp-ht-washingmachine"></i> In-Suite Laundry</li>
                                                                <li><i class="sa-icon-high-chair"></i> High Chair (Upon request)</li>
                                                                <li><i class="fa fa-bed"></i> Extra Beds (Upon request)</li>
                                                                <li><i class="fp-ht-bed29"></i> Bed Linens And Towels</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-xs-4 mg-room-fecilities">
                                                            <ul>
                                                                <li><i class="fa fa-paw"></i> Pet Friendly</li>
                                                                <li><i class="fa fa-wifi"></i> Internet</li>
                                                                <li><i class="sa-icon-firstdraft"></i> Hardwood Floor</li>
                                                                <li><i class="sa-icon-city"></i> City View</li>
                                                                <li><i class="sa-icon-air"></i> Air Conditioning</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-xs-4 mg-room-fecilities">
                                                            <ul>
                                                                <li><i class="fp-ht-nosmoking"></i> Non Smoking</li>
                                                                <li><i class="sa-icon-clean"></i> Housekeeping</li>
                                                                <li><i class="fp-ht-bed29"></i> Extra Linens (Upon request)</li>
                                                                <li><i class="fa fa-bed"></i> Baby Crib (Upon request)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="mt20">
                                                        <h2 class="mg-sec-left-title">@lang('general.bookingConditions')</h2>
                                                        <div>
                                                            <p>Non Refundable</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 text-right">
                                                    <a href="#" class="btn btn-main btn-next-tab">@lang('general.viewDetails')</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mg-avl-room">
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src="{{ asset('images/room-1.png') }}" alt="" class="img-responsive"></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h3 class="mg-avl-room-title"><a href="#">Torre Rohrmoser</a></h3>
                                                <div class="row mg-room-fecilities">
                                                    <div class="col-sm-6">
                                                        <ul>
                                                            <li>@lang('general.bookingId'): 4421577545</li>
                                                            <li>@lang('general.paid'): <span>$249.99</span></li>
                                                        </ul>
                                                        <h3 class="mg-avl-room-title">Junior Suite</h3>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                @lang('general.checkIn')
                                                                <div class="sa-date">
                                                                    <span class="day">2</span>
                                                                    <span>Mar 18 Monday</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                @lang('general.checkOut')
                                                                <div class="sa-date">
                                                                    <span class="day">6</span>
                                                                    <span>Mar 18 Monday</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 booking-detail">
                                                <div class="mg-features pt20">
                                                    <h2 class="mg-sec-left-title">@lang('general.amenities')</h2>
                                                    <div class="row">
                                                        <div class="col-xs-4 mg-room-fecilities">
                                                            <ul>
                                                                <li><i class="fp-ht-tv"></i> TV</li>
                                                                <li><i class="fp-ht-washingmachine"></i> In-Suite Laundry</li>
                                                                <li><i class="sa-icon-high-chair"></i> High Chair (Upon request)</li>
                                                                <li><i class="fa fa-bed"></i> Extra Beds (Upon request)</li>
                                                                <li><i class="fp-ht-bed29"></i> Bed Linens And Towels</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-xs-4 mg-room-fecilities">
                                                            <ul>
                                                                <li><i class="fa fa-paw"></i> Pet Friendly</li>
                                                                <li><i class="fa fa-wifi"></i> Internet</li>
                                                                <li><i class="sa-icon-firstdraft"></i> Hardwood Floor</li>
                                                                <li><i class="sa-icon-city"></i> City View</li>
                                                                <li><i class="sa-icon-air"></i> Air Conditioning</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-xs-4 mg-room-fecilities">
                                                            <ul>
                                                                <li><i class="fp-ht-nosmoking"></i> Non Smoking</li>
                                                                <li><i class="sa-icon-clean"></i> Housekeeping</li>
                                                                <li><i class="fp-ht-bed29"></i> Extra Linens (Upon request)</li>
                                                                <li><i class="fa fa-bed"></i> Baby Crib (Upon request)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="mt20">
                                                        <h2 class="mg-sec-left-title">@lang('general.bookingConditions')</h2>
                                                        <div>
                                                            <p>Non Refundable</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 text-right">
                                                    <a href="#" class="btn btn-main btn-next-tab">@lang('general.viewDetails')</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
