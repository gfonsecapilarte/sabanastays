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

    <script>
        var saLatitude  = {{ $contact->lat }};
        var saLongitude = {{ $contact->lng }};
    </script>

    <div class="mg-page">
        <div class="container">
            <div class="row">

                <div class="col-md-7">
                    <h2 class="mg-sec-left-title">{{ $contact->lang->title }}</h2>
                    <p>{{ $contact->lang->description }}</p>
                    <ul class="mg-contact-info">
                        <li><i class="fa fa-map-marker"></i>{{ $contact->lang->address }}</li>
                        <li><i class="fa fa-phone"></i> {{ $contact->lang->phone }}</li>
                        <li><i class="fa fa-envelope"></i> <a href="mailto:{{ $contact->lang->email }}">{{ $contact->lang->email }}</a></li>
                    </ul>
                    <div id="mg-map" class="mg-map"></div>
                </div>

                <div class="col-md-5">
                    <h2 class="mg-sec-left-title">@lang('general.eMailUs')</h2>
                    <form id="sa-contact-form" class="clearfix">
                        <div class="mg-contact-form-input">
                            <label for="full-name">@lang('general.fullName')</label>
                            <input type="text" class="form-control" name="name" required data-msg="@lang('validations.required')">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="email">@lang('general.email')</label>
                            <input type="email" class="form-control" name="email" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')">
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="subject">@lang('general.subject')</label>
                            <input type="text" class="form-control" name="subject" required data-msg="@lang('validations.required')" >
                        </div>
                        <div class="mg-contact-form-input">
                            <label for="message">@lang('general.message')</label>
                            <textarea class="form-control" name="message" rows="5" required data-msg="@lang('validations.required')"></textarea>
                        </div>
                        <input type="submit" class="btn btn-dark-main pull-right" value="@lang('general.send')">
                    </form>
                </div>

            </div>
        </div>
    </div>

@endsection
