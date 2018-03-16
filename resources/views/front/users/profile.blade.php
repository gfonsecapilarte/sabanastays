@extends('layouts.app')
@section('title', 'My Profile')
@section('bodyClass', 'my-profile')
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
                    <h2>My Profile</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="mg-sec-left-title">John Smith</h2>

                    <ul class="list-group">
                        <li class="list-group-item">
                            <div>
                                <h4>Home Address</h4>
                                <span>2140 Waiola St, Honolulu, HI 96826 USA</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">Edit</button>
                        </li>
                        <li class="list-group-item">
                            <div>
                                <h4>Phone Number</h4>
                                <span>+1 (324) 555 5555</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">Edit</button>
                        </li>
                        <li class="list-group-item">
                            <div>
                                <h4>Email Address</h4>
                                <span>johnsmith@gmail.com</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">Edit</button>
                        </li>
                        <li class="list-group-item">
                            <div>
                                <h4>Password</h4>
                                <span>**************</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">Edit</button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

@endsection
