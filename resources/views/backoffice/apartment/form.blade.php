<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-apartment">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>
<br />
<div class="row">
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
                                <div role="form" class="form-horizontal" data-id_language="{{ $language->id_lang }}">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control txt-name" placeholder="Apartment name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Short description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-short_description" placeholder="Apartment short description"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control txt-description" placeholder="Apartment description"></textarea>
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
                            <div class="panel-heading">Features</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Quest</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-quest" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Bedrooms</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-bedrooms" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Queen Beds</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-queen_bends" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Baths</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-baths" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">King Beds</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-king_beds" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Full Beds</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-full_beds" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Twin Beds</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control txt-feature-twin_beds" placeholder="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">Amenities</div>
                            <div class="panel-body">
                                <div class="list-amenities">
                                    @foreach ($amenities as $amenity)
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="{{ $amenity->id_amenity }}">
                                                {{ $amenity->lang[0]->name }}
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">Settings</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Building</label>
                                        <div class="col-sm-8">
<!--                                            @foreach ($buildings as $building)
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="opt-building" value="{{ $building->id_building }}">
                                                    {{ $building->lang[0]->name }}
                                                </label>
                                            </div>
                                            @endforeach-->
                                            <select class="form-control" name="lst-building">
                                                <option value="0"> - Choose building - </option>
                                                @foreach ($buildings as $building)
                                                <option value="{{ $building->id_building }}">{{ $building->lang[0]->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Apartment type</label>
                                        <div class="col-sm-8">
<!--                                            @foreach ($apartment_types as $apartment_type)
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="opt-apartment_type" value="{{ $apartment_type->id_apartment_type }}">
                                                    {{ $apartment_type->lang[0]->name }}
                                                </label>
                                            </div>
                                            @endforeach-->
                                            <select class="form-control" name="lst-apartment_type">
                                                <option value="0"> - Choose type - </option>
                                                @foreach ($apartment_types as $apartment_type)
                                                <option value="{{ $apartment_type->id_apartment_type }}">{{ $apartment_type->lang[0]->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Rate type</label>
                                        <div class="col-sm-8">
                                            <select class="form-control" name="lst-rate">
                                                <option value=""> - Choose type - </option>
                                                <option value="0.85">Low Season (0.85)</option>
                                                <option value="1.15">High Season (1.15)</option>
                                                <option value="1.00">Default (1.00)</option>
                                                <option value="1.05">Referral (1.05)</option>

                                            </select>
<!--                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="opt-rate" value="0.85">
                                                    Low Season (0.85)
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="opt-rate" value="1.15">
                                                    High Season (1.15)
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="opt-rate" value="1.00">
                                                    Default (1.00)
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="opt-rate" value="1.05">
                                                    Referral (1.05)
                                                </label>
                                            </div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Pricing</div>
            <div class="panel-body">
                <div class="row">
                    @foreach ($currencies as $currency)
                    <div class="col-xs-12 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">{{ $currency->name }}</div>
                            <div class="panel-body">
                                <div role="form" class="form-horizontal" data-id_currency="{{ $currency->id_currency }}">
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Price</label>
                                        <div class="col-sm-8">
                                            <div class="input-group">
                                                <span class="input-group-addon">{{ $currency->iso_code }}{{ $currency->sign }}</span>
                                                <input type="text" class="form-control txt-price" data-id_currency="{{ $currency->id_currency }}">
                                            </div>
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
            <div class="panel-heading">Media</div>
            <div class="panel-body">
                Panel content
            </div>
        </div>
    </div>
</div>
<br />
<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-apartment">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>