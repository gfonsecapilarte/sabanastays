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

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <h2 class="mg-sec-left-title">@lang('general.haveAccountSabanaStays')</h2>

                    <form id="sa-login" class="clearfix">
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

                        <div class="row mt30">
                            <div class="col-md-4">
                                <button class="btn social-button blue"><i class="fa fa-facebook"></i>@lang('general.loginWithFacebook')</button>
                            </div>
                            <div class="col-md-4">
                                <button class="btn social-button red"><i class="fa fa-google-plus"></i>@lang('general.loginWithGoogle')</button>
                            </div>
                        </div>
                    </form>

                    <hr class="mt50">
                    <h2 class="mg-sec-left-title mt30">@lang('general.ifYouDontHaveAnAccount')</h2>

                    <form id="sa-register" class="clearfix register-form">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="first-name" placeholder="@lang('general.firstName')" required data-msg="@lang('validations.required')">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="email" class="form-control" name="email" placeholder="@lang('general.email')" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="password" placeholder="@lang('general.password')" required data-msg="@lang('validations.required')">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="last-name" placeholder="@lang('general.lastName')" required data-msg="@lang('validations.required')">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="text" class="form-control" name="telephone" placeholder="@lang('general.telephone')" required data-msg="@lang('validations.required')">
                                </div>
                                <div class="mg-contact-form-input">
                                    <input type="password" class="form-control" name="retype-password" placeholder="@lang('general.retypePassword')" required data-msg="@lang('validations.required')">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <input type="submit" class="btn btn-dark-main" value="@lang('general.register')">
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

@endsection
