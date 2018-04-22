<hr class="mt30">
<h3>@lang('general.haveAccountSabanaStays')</h3>
<div class="mt30"></div>

<form id="sa-login-two" class="clearfix">
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

    <!-- <div class="row mt30">
        <div class="col-md-6">
            <button id="btn-facebook-login" class="btn social-button blue"><i class="fa fa-facebook"></i>@lang('general.loginWithFacebook')</button>
        </div>
        <div class="col-md-6">
            <button id="btn-google-login" class="btn social-button red"><i class="fa fa-google-plus"></i>@lang('general.loginWithGoogle')</button>
        </div>
    </div> -->
</form>
