@extends('layouts.app')
@section('title', 'Contact us')
@section('bodyClass', 'contact-us')
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
                        <li><a href="">Login</a></li>
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
                    <h2>Contact us</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="mg-page">
        <div class="container">
            <div class="row">

                <div class="col-md-7">
                    <h2 class="mg-sec-left-title">Our offices</h2>
                    <p>Consulatu quietem ipsas obruamus. Controversia unam queo firmam videri, afranius derigatur sine sentit inliberali beatam scribendi splendide. Recusabo maximisque ferentur arbitraretur vellem oritur cupiditatibus copulatas.</p>
                    <ul class="mg-contact-info">
                        <li><i class="fa fa-map-marker"></i> Level 13, 2 Elizabeth St, San Jose, Costa Rica</li>
                        <li><i class="fa fa-phone"></i> +1(800) 555-5555</li>
                        <li><i class="fa fa-envelope"></i> <a href="mailto:#">reservations@sabanastays.com</a></li>
                    </ul>
                    <div id="mg-map" class="mg-map"></div>
                </div>

                <div class="col-md-5">
                    <h2 class="mg-sec-left-title">E-mail us</h2>
                    <form class="clearfix">
                        <div class="mg-contact-form-input">
                            <label for="full-name">Full Name</label>
                            <input type="text" class="form-control" id="full-name">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="email">E-mail</label>
                            <input type="text" class="form-control" id="email">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="subject">Subject</label>
                            <input type="text" class="form-control" id="subject">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="subject">Message</label>
                            <textarea class="form-control" id="subject" rows="5"></textarea>
                        </div>
                        <input type="submit" class="btn btn-dark-main pull-right" value="Send">
                    </form>
                </div>

            </div>
        </div>
    </div>

@endsection
