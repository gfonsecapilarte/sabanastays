<div class="preloader"></div>
<header class="header transp sticky">
    <nav class="navbar navbar-inverse">
        <div class="container">

            <div class="navbar-header">
                <a class="navbar-brand" href="{{ route('home') }}">
                    <img src="{{ asset($header->media_logo[0]->path) }}" alt="LOGO SABANA STAYS" height="78">
                </a>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{ route('login') }}">@lang('general.login')</a></li>
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
