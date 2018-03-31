<aside class="mg-widget mt50" id="mg-room-cart">
    <h2 class="mg-widget-title">@lang('general.yourBookingDetails')</h2>
    <div class="mg-widget-cart">
        <div class="mg-cart-room">
            <img src="../images/room-1.png" alt="Delux Room" class="img-responsive">
            <h3>Junior Suite</h3>
        </div>
        <div class="mg-widget-cart-row">
            <strong>$189.99 /@lang('general.night')</strong>
        </div>
        <div class="mg-widget-cart-row">
            <strong>@lang('general.checkIn'):</strong>
            <span>02 Mar, 2018</span>
        </div>
        <div class="mg-widget-cart-row">
            <strong>@lang('general.checkOut'):</strong>
            <span>06 Mar, 2018</span>
        </div>
        <div class="mg-widget-cart-row">
            <strong>{{trans_choice('general.nights', 4, ['value' => 4])}}</strong>
        </div>
        <div class="mg-cart-total">
            <strong>@lang('general.total'):</strong>
            <span>$759.96</span>
        </div>
    </div>
</aside>
