<div class="row">
    <div class="col-md-8">
        <div class="mg-book-form-billing">
            <script>
                var publishableKey  = '{{ env('TCO_PUBLIC_KEY') }}';
                var sellerId        = '{{ env('TCO_SELLER_ID') }}';
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

                <h2 class="mg-sec-left-title">@lang('general.CreditCardInfo')</h2>

                <div class="row">
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="creditCard" placeholder="@lang('general.creditCard')" required data-msg="@lang('validations.required')">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="cvv" placeholder="CVV" required data-msg="@lang('validations.required')">
                        </div>
                    </div>
                    <div class="col-md-12">
                    <div class="mg-contact-form-input">
                        <div class="row">
                            <div class="col-md-6">
                                <select class="form-control" name="month" required data-msg="@lang('validations.required')">
                                    <option value="">@lang('general.month')</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select class="form-control" name="year" required data-msg="@lang('validations.required')">
                                    <option value="">@lang('general.year')</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </form>

            <a href="#thank-you" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.book')</a>
            <a href="#personal-info" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mg-cart-container">
            @include('front/booking/sidebar-payment-info')
        </div>
    </div>
</div>
