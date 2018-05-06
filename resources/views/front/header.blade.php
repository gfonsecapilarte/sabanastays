<div class="preloader"></div>
<header class="header transp sticky">
    <nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                @if(!empty($header->media_logo))
                    <a class="navbar-brand" href="{{ route('home') }}">
                        <img src="{{ asset($header->media_logo[0]->path) }}" alt="LOGO SABANA STAYS" height="78">
                    </a>
                @endif
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">

                    <li id="login-menu-item"><a href="{{ route('login') }}">@lang('general.login')</a></li>

                    <li id="user-menu-item" class="dropdown hidden">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <span class="name">@lang('general.myAccount')</span>
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="{{ route('bookings') }}">@lang('general.myBookings')</a></li>
                            <li><a href="{{ route('profile') }}">@lang('general.myProfile')</a></li>
                            <li><a id="logout" href="#">@lang('general.signOut')</a></li>
                        </ul>
                    </li>

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
