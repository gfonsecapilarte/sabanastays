@extends('layouts.app')
@section('title', __('general.login'))
@section('bodyClass', 'login')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/postheader')
    @stop

    <script>
        var myBookingsLink    = '{{ route("bookings") }}';
        var googleClientId    = '{{ env('GOOGLE_CLIENT_ID') }}';
    </script>

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <h2 class="mg-sec-left-title">@lang('general.haveAccountSabanaStays')</h2>

                    <form id="sa-login" class="clearfix">
                        @include('messages/success')
                        @include('messages/error')
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="email" class="form-control" name="email" placeholder="@lang('general.email')" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="password" placeholder="@lang('general.password')" required data-msg="@lang('validations.required')">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <input type="submit" class="btn btn-dark-main" value="@lang('general.login')">
                            </div>
                            <div class="col-md-8">
                                <a href="#" id="forgot-password" class="pull-right">@lang('general.ForgotYourPassword')</a>
                            </div>
                        </div>
                    </form>

                    <div class="row mt30">
                        <div class="col-md-4">
                            <button id="btn-facebook-login-l" class="btn social-button blue"><i class="fa fa-facebook"></i>@lang('general.loginWithFacebook')</button>
                        </div>
                        <div class="col-md-4">
                            <button id="btn-google-login-l" class="btn social-button red "><i class="fa fa-google-plus"></i>@lang('general.loginWithGoogle')</button>
                        </div>
                    </div>

                    <hr class="mt50">
                    <h2 class="mg-sec-left-title mt30">@lang('general.ifYouDontHaveAnAccount')</h2>

                    <form id="sa-register" class="clearfix register-form">
                        @include('messages/success')
                        @include('messages/error')
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="firstname" placeholder="@lang('general.firstName')" required data-msg="@lang('validations.required')" tabindex="1">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="email" class="form-control" name="email" placeholder="@lang('general.email')" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')" tabindex="3">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input id="password" type="password" class="form-control" name="password" placeholder="@lang('general.password')" required data-msg="@lang('validations.required')" tabindex="5">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="lastname" placeholder="@lang('general.lastName')" required data-msg="@lang('validations.required')" tabindex="2">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="phone" placeholder="@lang('general.telephone')" required data-msg="@lang('validations.required')"tabindex="4">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="password_confirm" placeholder="@lang('general.retypePassword')" required data-msg="@lang('validations.required')" data-msg-equalto="@lang('validations.equaltopassword')" tabindex="6">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <input type="submit" class="btn btn-dark-main" value="@lang('general.register')">
                            </div>
                        </div>
                    </form>

                    <div class="row mt30">
                        <div class="col-md-4">
                            <button id="btn-facebook-login-r" class="btn social-button blue"><i class="fa fa-facebook"></i>@lang('general.loginWithFacebook')</button>
                        </div>
                        <div class="col-md-4">
                            <button id="btn-google-login-r" class="btn social-button red"><i class="fa fa-google-plus"></i>@lang('general.loginWithGoogle')</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

@endsection
