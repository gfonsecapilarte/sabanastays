@extends('layouts.app')
@section('title', 'Login')
@section('bodyClass', 'login')
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
                </div>
            </div>
        </div>
    </div>

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <h2 class="mg-sec-left-title">Have an account at Sabana Stays? Log in</h2>

                    <form class="clearfix">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="email" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="password" placeholder="Password">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <input type="submit" class="btn btn-dark-main" value="Login">
                            </div>
                            <div class="col-md-8">
                                <a href="#" id="forgot-password" class="pull-right">Forgot your password?</a>
                            </div>
                        </div>

                        <div class="row mt30">
                            <div class="col-md-4">
                                <button class="btn social-button blue"><i class="fa fa-facebook"></i>Login with Facebook</button>
                            </div>
                            <div class="col-md-4">
                                <button class="btn social-button red"><i class="fa fa-google-plus"></i>Login with Google+</button>
                            </div>
                        </div>
                    </form>

                    <hr class="mt50">
                    <h2 class="mg-sec-left-title mt30">If you don't have an account with us, please Register below</h2>

                    <form class="clearfix register-form">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="first-name" placeholder="First Name">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="email" class="form-control" name="email" placeholder="Email">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="password" placeholder="Password">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="last-name" placeholder="Last Name">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="telephone" placeholder="Telephone">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="retype-password" placeholder="Retype Password">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <input type="submit" class="btn btn-dark-main" value="Register">
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

@endsection
