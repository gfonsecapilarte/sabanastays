<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sabanastays - @yield('title')</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="@yield('bodyClass')">

        @yield('header')
        @yield('postheader')
        @yield('content')

        @if (!empty($languages))
            @foreach ($languages as $lang)
                @if ($lang->iso == strtoupper($locale))
                <script>
                    var locale_id = {{ $lang->id_lang }};
                    var locale_pr = '{{ $locale }}';
                </script>
                @endif
            @endforeach
        @endif

        <footer class="mg-footer">
            <div class="mg-footer-widget">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="widget">
                                <ul>
                                    <li><a href="#">@lang('general.aboutUs')</a></li>
                                    <li><a href="#">@lang('general.contactUs')</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="widget">
                                <ul>
                                    <li><a href="#">@lang('general.privacyPolicy')</a></li>
                                    <li><a href="#">@lang('general.termsService')</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="widget">
                                <h2 class="mg-widget-title">@lang('general.GetExclOffers')</h2>
                                <form>
                                    <p>
                                        <input type="email" class="form-control" placeholder="@lang('general.yourEmail')">
                                    </p>
                                    <input type="submit" class="btn btn-main" value="@lang('general.subscribe')">
                                </form>
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
