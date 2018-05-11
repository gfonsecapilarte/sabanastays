<div id="mega-slider" class="carousel slide " data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        @foreach ($home->header_media as $img_key => $image)
            <li data-target="#mega-slider" data-slide-to="0" class="{{ ($img_key == 0) ? 'active':'' }}"></li>
        @endforeach
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        @foreach ($home->header_media as $img_key => $image)
            <div class="item {{ ($img_key == 0) ? 'active beactive':'' }}">
                <img src="{{ asset($image->path) }}" alt="...">
                <div class="carousel-caption">
                    <h2>{{ $home->header_title }}</h2>
                    <p>{{ $home->header_descr }}</p>
                </div>
            </div>
        @endforeach
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#mega-slider" role="button" data-slide="prev">
    </a>
    <a class="right carousel-control" href="#mega-slider" role="button" data-slide="next">
    </a>

    <div class="mg-book-now">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 col-md-3">
                    <h2 class="mg-bn-title">@lang('general.search')<span class="mg-bn-big">@lang('general.checkAvailability')</span></h2>
                </div>
                <div class="col-sm-9 col-md-9">
                    <div class="mg-bn-forms">
                        <form id="form-search-aptos">
                            <div class="row">
                                <div class="col-xs-12 col-sm-3 col-md-3">
                                    <div class="input-group date mg-check-in">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input type="text" class="form-control" name="checkin" placeholder="@lang('general.checkIn')">
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3">
                                    <div class="input-group date mg-check-out">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input type="text" class="form-control" name="checkout" placeholder="@lang('general.checkOut')">
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <select name="type" class="cs-select cs-skin-elastic">
                                                <option value="" disabled selected>@lang('general.kindApto')</option>
                                                @foreach ($typeAptos as $typeApto)
                                                    <option value="{{ $typeApto->id_apartment_type }}">{{ $typeApto->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3">
                                    <button type="submit" id="btn-search-aptos" class="btn btn-main btn-block">@lang('general.search')</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
