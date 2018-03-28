@extends('layouts.app')
@section('title', __('general.aboutUs'))
@section('bodyClass', 'about-us')
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

                <div class="col-md-8">
                    <h2 class="mg-sec-left-title">{{ $about->title }}</h2>
                    <p>{{ $about->description }}</p>
                </div>
                <div class="col-md-4">
                    <img src="{{ asset($about->body_image[0]->path) }}" alt="" class="img-responsive">
                </div>
            </div>
        </div>
    </div>

@endsection
