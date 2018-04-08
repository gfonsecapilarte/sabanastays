<div class="row">
    <div class="col-md-8">
        <div class="mg-book-form-personal">
            <h2 class="mg-sec-left-title">@lang('general.weNeedYourInfoToBooking'):</h2>

            <hr class="mt30">
            <h3>@lang('general.haveAccountSabanaStays')</h3>
            <div class="mt30"></div>

            <form id="sa-login" class="clearfix">
                @include('messages/error')
                <div class="row">
                    <div class="col-md-12">
                        <div class="mg-contact-form-input">
                            <input type="email" class="form-control" name="email" placeholder="@lang('general.email')" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mg-contact-form-input">
                            <input type="password" class="form-control" name="password" placeholder="@lang('general.password')" required data-msg="@lang('validations.required')">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <input type="submit" class="btn btn-dark-main" value="@lang('general.login')">
                    </div>
                    <div class="col-md-12">
                        <a href="#" id="forgot-password" class="pull-right">@lang('general.ForgotYourPassword')</a>
                    </div>
                </div>

                <div class="row mt30">
                    <div class="col-md-6">
                        <button id="btn-facebook-login" class="btn social-button blue"><i class="fa fa-facebook"></i>@lang('general.loginWithFacebook')</button>
                    </div>
                    <div class="col-md-6">
                        <button id="btn-google-login" class="btn social-button red"><i class="fa fa-google-plus"></i>@lang('general.loginWithGoogle')</button>
                    </div>
                </div>
            </form>

            <hr class="mt50">
            <h3>@lang('general.ifYouDontHaveAnAccount')</h3>
            <div class="mt50"></div>

            <form id="sa-register" class="clearfix register-form">
                @include('messages/error')
                <div class="row">
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="firstname" placeholder="@lang('general.firstName')" required data-msg="@lang('validations.required')" tabindex="1">
                        </div>
                        <div class="mg-contact-form-input">
                            <input type="email" class="form-control" name="email" placeholder="@lang('general.email')" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')" tabindex="3">
                        </div>
                        <div class="mg-contact-form-input">
                            <select class="form-control" name="gender" required data-msg="@lang('validations.required')" tabindex="5">
                                <option></option>
                                <option value="FEMALE">@lang('general.female')</option>
                                <option value="MALE">@lang('general.male')</option>
                            </select>
                        </div>
                        <div class="mg-contact-form-input">
                            <input id="password" type="password" class="form-control" name="password" placeholder="@lang('general.password')" required data-msg="@lang('validations.required')" tabindex="7">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="lastname" placeholder="@lang('general.lastName')" required data-msg="@lang('validations.required')" tabindex="2">
                        </div>
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="telephone" placeholder="@lang('general.telephone')" required data-msg="@lang('validations.required')"tabindex="4">
                        </div>
                        <div class="mg-contact-form-input">
                            <input type="text" class="form-control" name="birthdate" placeholder="@lang('general.birthdate')" required data-msg="@lang('validations.required')"tabindex="6">
                        </div>
                        <div class="mg-contact-form-input">
                            <input type="password" class="form-control" name="password_confirm" placeholder="@lang('general.retypePassword')" required data-msg="@lang('validations.required')" data-msg-equalto="@lang('validations.equaltopassword')" tabindex="8">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <input type="submit" class="btn btn-dark-main" value="@lang('general.register')">
                    </div>
                </div>
            </form>

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
