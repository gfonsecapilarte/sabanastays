<hr class="mt50">
<h3>@lang('general.ifYouDontHaveAnAccount')</h3>
<div class="mt50"></div>

<form id="sa-register-two" class="clearfix register-form">
    <div class="row">
        <div class="col-md-6">
            <div class="mg-contact-form-input">
                <input type="text" class="form-control" name="firstname" placeholder="@lang('general.firstName')" required data-msg="@lang('validations.required')" tabindex="1">
            </div>
            <div class="mg-contact-form-input">
                <input type="email" class="form-control" name="email" placeholder="@lang('general.email')" required data-msg="@lang('validations.required')" data-msg-email="@lang('validations.email')" tabindex="3">
            </div>
            <div class="mg-contact-form-input">
                <input id="password" type="password" class="form-control" name="password" placeholder="@lang('general.password')" required data-msg="@lang('validations.required')" tabindex="5">
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
                <input type="password" class="form-control" name="password_confirm" placeholder="@lang('general.retypePassword')" required data-msg="@lang('validations.required')" data-msg-equalto="@lang('validations.equaltopassword')" tabindex="6">
            </div>
        </div>
    </div>
</form>
