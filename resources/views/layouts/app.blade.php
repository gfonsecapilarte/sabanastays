<!DOCTYPE html>
<html lang="{{ $locale }}">
    <head>
        <meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sabanastays - @yield('title')</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="@yield('bodyClass')">

        @yield('header')
        @yield('postheader')
        @yield('content')

        @if (!empty($locale))
            <script>
                var locale = '{{ strtoupper($locale) }}';
            </script>
        @endif

        <footer class="mg-footer">
            <div class="mg-footer-widget">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="widget">
                                <h2 class="mg-widget-title">Sabanastays</h2>
                                <ul>
                                    <li><a href="{{ route('aboutus') }}">@lang('general.aboutUs')</a></li>
                                    <li><a href="{{ route('contactus') }}">@lang('general.contactUs')</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="widget">
                                <h2 class="mg-widget-title">@lang('general.terms')</h2>
                                <ul>
                                    <li><a href="{{ route('privacyPolicy') }}">@lang('general.privacyPolicy')</a></li>
                                    <li><a href="{{ route('termsService') }}">@lang('general.termsService')</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="mg-widget-title">@lang('general.socialMedia')</h2>
                            <p>
                                <ul class="mg-footer-social">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-rss"></i></a></li>
                                </ul>
                            </p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="widget">
                                <h2 class="mg-widget-title">@lang('general.newsletters')</h2>
                                <form>
                                    <p>
                                        <input type="email" class="form-control" placeholder="@lang('general.yourEmail')">
                                    </p>
                                    <input type="submit" class="btn btn-main" value="@lang('general.subscribe')">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <script src="{{ asset('js/2co.min.js') }}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
