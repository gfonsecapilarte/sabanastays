<hr class="mt30">
<h3>@lang('general.addressInformation')</h3>
<div class="mt30"></div>
<form id="sa-address" class="clearfix">
    @include('messages/success')
    @include('messages/error')
    <div class="row">
        <div class="col-md-6">
            <div class="mg-contact-form-input">
                <select class="form-control" name="country" required data-msg="@lang('validations.required')">
                    <option value="" disabled selected>@lang('general.country')</option>
                    @foreach ($countries as $country)
                        <option value="{{ $country->id_country }}">{{ $country->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="mg-contact-form-input">
                <select class="form-control" name="city" required data-msg="@lang('validations.required')">
                    <option value="" disabled selected>@lang('general.city')</option>
                </select>
            </div>
            <div class="mg-contact-form-input">
                <input type="text" class="form-control" name="postal" placeholder="@lang('general.postalCode')" required data-msg="@lang('validations.required')">
            </div>
        </div>
        <div class="col-md-6">
            <div class="mg-contact-form-input">
                <select class="form-control" name="state" required data-msg="@lang('validations.required')">
                    <option value="" disabled selected>@lang('general.state')</option>
                </select>
            </div>
            <div class="mg-contact-form-input">
                <input type="text" class="form-control" name="address" placeholder="@lang('general.address')" required data-msg="@lang('validations.required')">
            </div>
        </div>

        <div class="col-md-12">
            <input type="submit" class="btn btn-dark-main" value="@lang('general.registerAddress')">
        </div>
    </div>
</form>