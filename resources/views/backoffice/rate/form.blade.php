<input type="hidden" id="txt-id_rate" value="@isset($rate){{ $rate->id_rate }}@endisset" />
<div class="row">
    <div class="col-xs-12 text-right">
        <span class="btn btn-primary save-rate">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>
<br />
<div class="row" id="container-form-rate" data-link="{{ route('dashboard.rates') }}">
    <div class="col-xs-12">
        <div class="panel panel-default">
            <div class="panel-heading">Setting rates</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="panel panel-info">
                            <div class="panel-body">
                                <div role="form" class="form-horizontal form-information">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Name (*)</label>
                                        <div class="col-sm-9">
                                            <input type="text" required class="form-control txt-name" autocomplete="off" placeholder="Name rate" value="@isset($rate){{ $rate->name }}@endisset">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Qty night (*)</label>
                                        <div class="col-sm-9">
                                        <select class="form-control" id="lst-rate" name="lst-rate" required>
                                                <option value="" > - Elije noches - </option>
                                                <option value="1-7" @if (isset($rate) && $rate->nights == '1-7') selected @endif>1 - 7 noches</option>
                                                <option value="8-30" @if (isset($rate) && $rate->nights == '8-30') selected @endif>8 - 30 noches</option>
                                                <option value="31-90"@if (isset($rate) && $rate->nights == '31-90') selected @endif>31 - 90 noches</option>                                                
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">% disccount (*)</label>
                                        <div class="col-sm-9">
                                            <div class="input-group">                                                
                                                <input type="text" required="" class="form-control txt-discount" placeholder="Discount percentage" value="@isset($rate){{ $rate->variant }}@endisset">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                        </div>                                        
                                    </div>                                    
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
        <span class="btn btn-primary save-rate">
            <i class="fa fa-save"></i>
            Save
        </span>
    </div>
</div>