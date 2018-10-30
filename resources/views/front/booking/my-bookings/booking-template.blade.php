<div id="booking-template" class="mg-avl-room hidden">
    <div class="row">
        <div class="col-sm-5">
            <a href="#"><img src="{{ asset('images/room-1.png') }}" alt="" class="img-responsive sa-thumbnail"></a>
        </div>
        <div class="col-sm-7">
            <h3 class="mg-avl-room-title sa-building-name"><a href="#">Torre Rohrmoser Hola</a></h3>
            <div class="row">
                <div class="col-sm-6">
                    <ul>
                        <li class="sa-booking-reference">
                        @lang('general.bookingId'):
                        <span>4421577545</span></li>
                        <li>@lang('general.paid'):
                            <span>
                                <span class="currency-sign"></span>
                                <span class="sa-booking-price">249.99</span>
                            </span>
                            </li>
                    </ul>
                    <h3 class="mg-avl-room-title sa-apartment-type">Junior Suite</h3>
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-6">
                            @lang('general.checkIn')
                            <div class="sa-date start">
                                <span class="day">6</span>
                                <span class="month">Mar</span>
                                <span class="year">18</span>
                                <span class="day_b">Monday</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            @lang('general.checkOut')
                            <div class="sa-date end">
                                <span class="day">6</span>
                                <span class="month">Mar</span>
                                <span class="year">18</span>
                                <span class="day_b">Monday</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 booking-detail">
            <div class="mg-features">
                <h2 class="mg-sec-left-title">@lang('general.amenities')</h2>
                <div class="row">
                    <div class="col-xs-12 mg-room-fecilities">
                        <ul>
                            <li><i class="fp-ht-tv"></i> TV</li>
                            <li><i class="fp-ht-washingmachine"></i> In-Suite Laundry</li>
                            <li><i class="sa-icon-high-chair"></i> High Chair (Upon request)</li>
                            <li><i class="fa fa-bed"></i> Extra Beds (Upon request)</li>
                            <li><i class="fp-ht-bed29"></i> Bed Linens And Towels</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 text-right">
                <a href="#" class="btn btn-main btn-next-tab">@lang('general.viewDetails')</a>
            </div>
        </div>
    </div>
</div>
