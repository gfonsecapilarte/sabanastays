@extends('layouts.app')
@section('title', 'About us')
@section('bodyClass', 'about-us')
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
                        <li><a href="">@lang('general.login')</a></li>
                        @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                            <li class="{{ $locale == $localeCode ? 'active' : '' }}">
                                <a class="lang-selector" rel="alternate" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                    {{ $localeCode }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="mg-page-title parallax">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>About us</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="mg-page">
        <div class="container">
            <div class="row">

                <div class="col-md-8">
                    <h2 class="mg-sec-left-title">Sabanas Stays</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in accumsan ante. Pellentesque convallis erat odio, ut pretium magna ultrices ut. Ut scelerisque rutrum euismod. Morbi velit eros, ullamcorper sed est eu, varius posuere elit. Cras nec finibus odio. Donec pulvinar ligula sit amet magna gravida hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet pretium urna. Vivamus sed placerat nisl, a mattis ex. Morbi pharetra tempor massa nec lacinia. Etiam a dolor elit.

                    Pellentesque elit ante, commodo ut luctus eu, vestibulum id neque. Ut vehicula purus ac dictum convallis. Maecenas eu erat tincidunt, varius magna quis, porta massa. In porta interdum ipsum vel mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat est sit amet suscipit bibendum. Sed sed hendrerit mi. Aliquam non eros elit. Morbi sit amet sollicitudin augue.</p>
                </div>
                <div class="col-md-4">
                    <img src="{{ asset('images/room-1.png') }}" alt="" class="img-responsive">
                </div>
            </div>
        </div>
    </div>

@endsection
