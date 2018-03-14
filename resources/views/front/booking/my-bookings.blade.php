@extends('layouts.app')
@section('title', 'Home')
@section('bodyClass', 'my-bookings')
@section('content')

    <div class="preloader"></div>
    <header class="header transp sticky">
        <nav class="navbar navbar-inverse">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src="{{ asset('images/LogoSabanaStays.png') }}" alt="LOGO SABANA STAYS"></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="">Hello John Smith</a></li>
                        <li class="active"><a href="">EN</a></li>
                        <li><a href="">SP</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="mg-page-title parallax">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>My Bookings</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <hr class="mb50 mt0">
        <div class="row">
            <div class="col-md-12">
                <div class="mg-tab-top-nav">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#upcoming" aria-controls="home12" role="tab" data-toggle="tab">
                                <i class="fa fa-spinner"></i> Upcoming
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#profile12" aria-controls="profile12" role="tab" data-toggle="tab">
                                <i class="fa fa-check"></i> Completed
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#settings12" aria-controls="settings12" role="tab" data-toggle="tab">
                                <i class="fa fa-times"></i> Cancelled
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
                                                            <li>Booking ID: 4421577545</li>
                                                            <li>PAID: <span>$249.99</span></li>
                                                        </ul>
                                                        <h3 class="mg-avl-room-title">Junior Suite</h3>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                Check In
                                                                <div class="sa-date">
                                                                    <span class="day">2</span>
                                                                    <span>Mar 18 Monday</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                Check Out
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
                                                    <h2 class="mg-sec-left-title">Amenities</h2>
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
                                                        <h2 class="mg-sec-left-title">Booking Conditions</h2>
                                                        <div>
                                                            <p>Non Refundable</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 text-right">
                                                    <a href="#" class="btn btn-main btn-next-tab">View Details</a>
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
                                                            <li>Booking ID: 4421577545</li>
                                                            <li>PAID: <span>$249.99</span></li>
                                                        </ul>
                                                        <h3 class="mg-avl-room-title">Junior Suite</h3>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                Check In
                                                                <div class="sa-date">
                                                                    <span class="day">2</span>
                                                                    <span>Mar 18 Monday</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                Check Out
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
                                                    <h2 class="mg-sec-left-title">Amenities</h2>
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
                                                        <h2 class="mg-sec-left-title">Booking Conditions</h2>
                                                        <div>
                                                            <p>Non Refundable</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12 text-right">
                                                    <a href="#" class="btn btn-main btn-next-tab">View Details</a>
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
