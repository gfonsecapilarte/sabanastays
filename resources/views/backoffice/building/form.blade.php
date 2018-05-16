<input type="hidden" id="txt-id_building" value="@isset($building){{ $building->id_building }}@endisset" />
<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-building">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>
<br />
<div class="row" id="container-form-building">
    <div class="col-xs-12">
        <div class="panel panel-default">
            <div class="panel-heading">Information</div>
            <div class="panel-body">
                <div class="row">
                    @foreach ($languages as $language)
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-info">
                            <div class="panel-heading">{{ $language->name }}</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information" data-id_language="{{ $language->id_lang }}">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-name" placeholder="Building name" value="@if (isset($building) && isset($building->lang[$language->iso])){{ $building->lang[$language->iso]->name }}@endif">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-description" placeholder="Building description">@if (isset($building) && isset($building->lang[$language->iso])){{ $building->lang[$language->iso]->description }}@endif</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Configuration</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">Location</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Building</label>
                                        <div class="col-sm-8">
                                            <select class="form-control" id="lst-city" name="lst-city">
                                                <option value="0" @if (!isset($bulding)) selected @endif> - Choose city - </option>
                                                @foreach ($cities as $city)
                                                <option value="{{ $city->id_city }}" @if (isset($city) && isset($bulding) && $city->id_city == $building->id_city) selected @endif >{{ $city->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Address</label>
                                        <div class="col-sm-8">
                                            <input id="txt-address" type="text" class="form-control" placeholder="" value="@isset($building){{ $building->address }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Postal code</label>
                                        <div class="col-sm-8">
                                            <input id="txt-postal_code" type="text" class="form-control" placeholder="" value="@isset($building){{ $building->postal_code }}@endisset">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8">
                        <div class="panel panel-info">
                            <div class="panel-heading">Map</div>
                            <div class="panel-body">
                                <div>
                                    MAP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br />
<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-building">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>