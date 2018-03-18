@extends('layouts.app')
@section('title', 'Home')
@section('content')

    @section('header')
        @include('front/home/header')
    @stop

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
