<div class="row">
    <div class="col-md-8">
        <div class="mg-book-form-personal">
            <h2 class="mg-sec-left-title">@lang('general.weNeedYourInfoToBooking'):</h2>

            <form id="sa-booking-personal-info-form">
                <div class="row pb40">
                    <div class="col-md-6">
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="firstName" placeholder="@lang('general.firstName')" required data-msg="@lang('validations.required')" tabindex="1">
                        </div>
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="address" placeholder="@lang('general.address')" required data-msg="@lang('validations.required')" tabindex="3">
                        </div>
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="city" placeholder="@lang('general.city')" required data-msg="@lang('validations.required')" tabindex="5">
                        </div>
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="state" placeholder="@lang('general.state')" required data-msg="@lang('validations.required')" tabindex="7">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="lastName" placeholder="@lang('general.lastName')" required data-msg="@lang('validations.required')" tabindex="2">
                        </div>
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="postalCode" placeholder="@lang('general.postalCode')" required data-msg="@lang('validations.required')" tabindex="4">
                        </div>
                        <div class="mg-book-form-input">
                            <input type="text" class="form-control" name="country" placeholder="@lang('general.country')" required data-msg="@lang('validations.required')" tabindex="6">
                        </div>
                    </div>
                </div>
            </form>

            <h2 class="mg-sec-left-title">@lang('general.accountFutureBookings'):</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="mg-book-form-input">
                        <input type="tel" class="form-control" placeholder="@lang('general.email')">
                    </div>
                    <div class="mg-book-form-input">
                        <input type="password" class="form-control" placeholder="@lang('general.password')">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mg-book-form-input">
                        <input type="email" class="form-control" placeholder="@lang('general.telephone')">
                    </div>
                    <div class="mg-book-form-input">
                        <input type="password" class="form-control" placeholder="@lang('general.retypePassword')">
                    </div>
                </div>
            </div>
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
