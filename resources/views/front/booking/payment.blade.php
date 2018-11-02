<div class="row">
    <div class="col-md-8">
        <div class="mg-book-form-billing">
            <script>
                // var paypalKeySandbox  = '{{ env('PAYPAL_SANDBOX') }}';
                // var paypalKeyProduction  = '{{ env('PAYPAL_PRODUCTION') }}';

                var publishableKey  = '{{ env('TCO_PUBLIC_KEY') }}';
                var sellerId        = '{{ env('TCO_SELLER_ID') }}';
                var paymentError    = '{{ __('general.paymentError') }}';
            </script>
            <form id='sa-payment-form'>
                <h2 class="mg-sec-left-title">
                    <input name="second_address" type="checkbox" id="sa-check-diff-address"> @lang('general.isYourBillingAddressDiff')
                </h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <select readonly class="form-control" name="id_country" required data-msg="@lang('validations.required')">
                                <option value="" disabled selected>@lang('general.country')</option>
                                @foreach ($countries as $country)
                                    <option value="{{ $country->id_country }}">{{ $country->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mg-contact-form-input">
                            <select readonly class="form-control" name="id_city" required data-msg="@lang('validations.required')">
                                <option value="" disabled selected>@lang('general.city')</option>
                            </select>
                        </div>
                        <div class="mg-contact-form-input">
                            <input readonly type="text" class="form-control" name="postcode" placeholder="@lang('general.postalCode')" required data-msg="@lang('validations.required')">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <select readonly class="form-control" name="id_state" required data-msg="@lang('validations.required')">
                                <option value="" disabled selected>@lang('general.state')</option>
                            </select>
                        </div>
                        <div class="mg-contact-form-input">
                            <input readonly type="text" class="form-control" name="address" placeholder="@lang('general.address')" required data-msg="@lang('validations.required')">
                        </div>
                    </div>
                </div>

                <!-- <h2 class="mg-sec-left-title">@lang('general.CreditCardInfo')</h2> -->

                <!-- <div class="row">
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="creditCard" placeholder="@lang('general.creditCard')" required data-msg="@lang('validations.required')" data-msg-creditcard="@lang('validations.creditCard')">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="cvv" placeholder="CVV" required data-msg="@lang('validations.required')" data-msg-maxlength="@lang('validations.cvvMaxlength')" data-msg-minlength="@lang('validations.cvvMinlength')"
                            data-msg-digits="@lang('validations.digits')">
                        </div>
                    </div>
                    <div class="col-md-12">
                    <div class="mg-contact-form-input">
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="@lang('general.month')" name="month" required data-msg="@lang('validations.required')" data-msg-maxlength="@lang('validations.monthMaxlength')" data-msg-digits="@lang('validations.digits')">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="@lang('general.year')" name="year" required data-msg="@lang('validations.required')" data-msg-maxlength="@lang('validations.yearMaxlength')" data-msg-minlength="@lang('validations.yearMinlength')" data-msg-digits="@lang('validations.digits')">
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- </div> -->
            </form>

            <!-- <a href="#payment" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.book')</a> -->
            <a href="#address-form" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>
            <div id="paypal-button-container" class="col-md-6"></div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mg-cart-container">
            @include('front/booking/sidebar-payment-info')
        </div>
    </div>
</div>
