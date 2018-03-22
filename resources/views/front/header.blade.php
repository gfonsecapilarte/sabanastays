<div class="preloader"></div>
<header class="header transp sticky">
    <nav class="navbar navbar-inverse">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#"><img src="{{ asset('images/LogoSabanaStays.png') }}" alt="LOGO SABANA STAYS"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="">@lang('general.login')</a></li>
                    @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                        <li class="{{ $locale == $localeCode ? 'active' : '' }}">
                            <a class="lang-selector" rel="alternate" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                {{ $localeCode }}
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </nav>
</header>
