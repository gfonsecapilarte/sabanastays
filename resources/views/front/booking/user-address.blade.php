<hr class="mt30">
<h3>@lang('general.addressInformation')</h3>
<div class="mt30"></div>
<form id="sa-address" class="clearfix">
    @include('messages/success')
    @include('messages/error')
    <div class="row">
        <div class="col-md-6">
            <div class="mg-contact-form-input">
                <select class="form-control" name="id_country" required data-msg="@lang('validations.required')">
                    <option value="" disabled selected>@lang('general.country')</option>
                    @foreach ($countries as $country)
                        <option value="{{ $country->id_country }}">{{ $country->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="mg-contact-form-input">
                <select class="form-control" name="id_city" required data-msg="@lang('validations.required')">
                    <option value="" disabled selected>@lang('general.city')</option>
                </select>
            </div>
            <div class="mg-contact-form-input">
                <input type="text" class="form-control" name="postcode" placeholder="@lang('general.postalCode')" required data-msg="@lang('validations.required')">
            </div>
        </div>
        <div class="col-md-6">
            <div class="mg-contact-form-input">
                <select class="form-control" name="id_state" required data-msg="@lang('validations.required')">
                    <option value="" disabled selected>@lang('general.state')</option>
                </select>
            </div>
            <div class="mg-contact-form-input">
                <input type="text" class="form-control" name="address" placeholder="@lang('general.address')" required data-msg="@lang('validations.required')">
            </div>
        </div>
    </div>

    <hr class="mt50"/>
    <a href="#payment-form" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.next')</a>
    <a href="#" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>

</form>
