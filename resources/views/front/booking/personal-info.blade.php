<div class="row">
    <div class="col-md-8">
        <div class="mg-book-form-personal">
            <h2 class="mg-sec-left-title">@lang('general.weNeedYourInfoToBooking'):</h2>

            <div>
                <div id="contLoginUser">
                    @include('front/booking/login')
                </div>

                <div id="contRegisterUser">
                    @include('front/booking/user-register')
                </div>
            </div>

            <hr class="mt50"/>

            <a href="#address-form" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.next')</a>
            <a href="#select-room" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mg-cart-container">
            @include('front/booking/sidebar-payment-info')
        </div>
    </div>
</div>
