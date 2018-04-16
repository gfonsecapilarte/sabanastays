<script>
    var regisUserSuccMsg    = '{{ __('general.registeredUserSuccess') }}';
    var loginSuccess        = '{{ __('general.loginSuccess') }}';
    var addressSuccess      = '{{ __('general.addressSuccess') }}';
    var currentPage         = 'booking';
</script>

<div class="row">
    <div class="col-md-8">
        <div class="mg-book-form-personal">
            <h2 class="mg-sec-left-title">@lang('general.weNeedYourInfoToBooking'):</h2>

            <div id="contLoginUser">
                @include('front/booking/login')
            </div>

            <div id="contRegisterUser">
                @include('front/booking/user-register')
            </div>

            <div id="contAddressUser">
                @include('front/booking/user-address')
            </div>

            <hr class="mt50"/>

            <a href="#payment" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.next')</a>
            <a href="#select-room" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mg-cart-container">
            @include('front/booking/sidebar-payment-info')
        </div>
    </div>
</div>
