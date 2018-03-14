@extends('layouts.app')
@section('title', 'Home')
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
            <li data-target="#mega-slider" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active beactive">
                <img src="{{ asset('images/slide-4.png') }}" alt="...">
                <div class="carousel-caption">
                    <h2>sabanastays</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="item">
                <img src="{{ asset('images/slide-2.png') }}" alt="...">
                <div class="carousel-caption">
                    <h2>sabanastays</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#mega-slider" role="button" data-slide="prev">
        </a>
        <a class="right carousel-control" href="#mega-slider" role="button" data-slide="next">
        </a>

        <div class="mg-book-now">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h2 class="mg-bn-title">Search<span class="mg-bn-big">Check availability</span></h2>
                    </div>
                    <div class="col-md-9">
                        <div class="mg-bn-forms">
                            <form>
                                <div class="row">
                                    <div class="col-md-3 col-xs-6">
                                        <div class="input-group date mg-check-in">
                                            <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Check In">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <div class="input-group date mg-check-out">
                                            <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Check Out">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <select class="cs-select cs-skin-elastic">
                                                    <option value="" disabled selected>Bedroom</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <button type="submit" class="btn btn-main btn-block">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mg-about parallax">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h2 class="mg-sec-left-title">Sabana Stays</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliqua venandi mutat plerisque nostrum vos, geometria intellegimus percurri mediocritatem aeque suppetet explicatis, praeclaram ambigua cogitavisse vituperatoribus dicent signiferumque alios improbe, reliquisti rudem, consedit pendet circumcisaque amorem patria magnopere inmortalibus dolere. Didicisset labore vitium referenda labor peccant integre turpe est tantopere, eius defuturum sua dolorum crudelis exercitumque, nobis, videntur doloribus patre poetarum omnisque cognitionem primum, atomos certamen possent, adversantur probatum iudicante indicaverunt repugnantibus, operis aequi aequitate clarorum occultarum multa diis sine inter.</p>
                </div>
                <div class="col-md-5">
                    <div class="video-responsive">
                        <iframe src="https://player.vimeo.com/video/134008155" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
