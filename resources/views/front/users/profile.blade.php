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
                    <form id="user-detail-form">
                        @include('messages/success')
                        @include('messages/error')

                        <h2 class="mg-sec-left-title">John Smith</h2>

                        <ul class="list-group">
                            <li class="list-group-item">
                                <div>
                                    <h4>@lang('general.firstName')</h4>
                                    <input type="text" name="firstname" class="form-control" required data-msg="@lang('validations.required')" />
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div>
                                    <h4>@lang('general.lastName')</h4>
                                    <input type="text" name="lastname" class="form-control" required data-msg="@lang('validations.required')" />
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div>
                                    <h4>@lang('general.birthdate')</h4>
                                    <input type="text" name="birthdate" class="form-control" required data-msg="@lang('validations.required')" />
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div>
                                    <h4>@lang('general.gender')</h4>
                                    <select class="form-control" name="gender" required data-msg="@lang('validations.required')" >
                                        <option></option>
                                        <option value="FEMALE">@lang('general.female')</option>
                                        <option value="MALE">@lang('general.male')</option>
                                    </select>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div>
                                    <h4>@lang('general.email')</h4>
                                    <input type="email" name="email" class="form-control" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')" />
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div>
                                    <h4>@lang('general.password')</h4>
                                    <span>**************</span>
                                </div>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-dark-main" value="@lang('general.update')">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection
