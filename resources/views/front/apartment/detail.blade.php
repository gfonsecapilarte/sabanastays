@extends('layouts.app')
@section('title', 'Home')
@section('bodyClass', 'apartment-detail')
@section('content')

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
                        <li><a href="">Login</a></li>
                        <li class="active"><a href="">EN</a></li>
                        <li><a href="">SP</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </header>

    <div id="mega-slider" class="carousel slide " data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#mega-slider" data-slide-to="0" class="active"></li>
            <li data-target="#mega-slider" data-slide-to="1"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active beactive">
                <img src="{{ asset('images/slide-2.png') }}" alt="...">
            </div>
            <div class="item">
                <img src="{{ asset('images/slide-4.png') }}" alt="...">
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#mega-slider" role="button" data-slide="prev">
        </a>
        <a class="right carousel-control" href="#mega-slider" role="button" data-slide="next">
        </a>
    </div>

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
                <h2 class="mg-sec-left-title">Ameneties</h2>
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
                    <h2 class="mg-sec-left-title">Location</h2>
                </div>
            </div>
        </div>
        <div>
            <div id="mg-map" class="mg-map"></div>
        </div>
    </div>

@endsection
