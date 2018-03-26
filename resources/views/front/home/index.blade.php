@extends('layouts.app')
@section('title', 'Home')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/home/postheader')
    @stop

    <div class="mg-about parallax">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h2 class="mg-sec-left-title">{{ $home->lang['title'] }}</h2>
                    <p>{{ $home->lang['description'] }}</p>
                </div>
                <div class="col-md-5">
                    <div class="video-responsive">
                        <iframe src="{{ $home->video_url }}" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
