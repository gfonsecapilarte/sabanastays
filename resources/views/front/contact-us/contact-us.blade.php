@extends('layouts.app')
@section('title',  __('general.contactUs'))
@section('bodyClass', 'contact-us')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/postheader')
    @stop

    <div class="mg-page">
        <div class="container">
            <div class="row">

                <div class="col-md-7">
                    <h2 class="mg-sec-left-title">@lang('general.ourOffices')</h2>
                    <p>Consulatu quietem ipsas obruamus. Controversia unam queo firmam videri, afranius derigatur sine sentit inliberali beatam scribendi splendide. Recusabo maximisque ferentur arbitraretur vellem oritur cupiditatibus copulatas.</p>
                    <ul class="mg-contact-info">
                        <li><i class="fa fa-map-marker"></i> Level 13, 2 Elizabeth St, San Jose, Costa Rica</li>
                        <li><i class="fa fa-phone"></i> +1(800) 555-5555</li>
                        <li><i class="fa fa-envelope"></i> <a href="mailto:#">reservations@sabanastays.com</a></li>
                    </ul>
                    <div id="mg-map" class="mg-map"></div>
                </div>

                <div class="col-md-5">
                    <h2 class="mg-sec-left-title">@lang('general.eMailUs')</h2>
                    <form class="clearfix">
                        <div class="mg-contact-form-input">
                            <label for="full-name">@lang('general.fullName')</label>
                            <input type="text" class="form-control" id="full-name">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="email">@lang('general.email')</label>
                            <input type="text" class="form-control" id="email">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="subject">@lang('general.subject')</label>
                            <input type="text" class="form-control" id="subject">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="subject">@lang('general.message')</label>
                            <textarea class="form-control" id="subject" rows="5"></textarea>
                        </div>
                        <input type="submit" class="btn btn-dark-main pull-right" value="@lang('general.send')">
                    </form>
                </div>

            </div>
        </div>
    </div>

@endsection
