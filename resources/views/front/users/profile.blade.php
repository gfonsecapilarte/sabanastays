@extends('layouts.app')
@section('title',  __('general.myProfile'))
@section('bodyClass', 'my-profile')
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
                    <h2 class="mg-sec-left-title">John Smith</h2>

                    <ul id="user-detail" class="list-group">
                        <li class="list-group-item">
                            <div>
                                <h4>@lang('general.homeAddress')</h4>
                                <span>2140 Waiola St, Honolulu, HI 96826 USA</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">@lang('general.edit')</button>
                        </li>
                        <li class="list-group-item">
                            <div>
                                <h4>@lang('general.phoneNumber')</h4>
                                <span>+1 (324) 555 5555</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">@lang('general.edit')</button>
                        </li>
                        <li class="list-group-item">
                            <div>
                                <h4>@lang('general.emailAddress')</h4>
                                <span>johnsmith@gmail.com</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">@lang('general.edit')</button>
                        </li>
                        <li class="list-group-item">
                            <div>
                                <h4>@lang('general.password')</h4>
                                <span>**************</span>
                            </div>
                            <button class="btn btn-dark-main pull-right">@lang('general.edit')</button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

@endsection
