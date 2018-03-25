@extends('layouts.app')
@section('title',  __('general.booking'))
@section('description',  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
@section('bodyClass', 'booking')
@section('content')

    @section('header')
        @include('front/header')
    @stop

    @section('postheader')
        @include('front/postheader')
    @stop

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="mg-booking-form">

                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#select-room" aria-controls="select-room" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">1</span><span class="mg-bs-bar"></span>@lang('general.selectApartment')</a>
                            </li>
                            <li role="presentation">
                                <a href="#personal-info" aria-controls="personal-info" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">2</span><span class="mg-bs-bar"></span>@lang('general.yourInformation')</a>
                            </li>
                            <li role="presentation">
                                <a href="#payment" aria-controls="payment" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">3</span><span class="mg-bs-bar"></span>@lang('general.payInformation')</a>
                            </li>
                            <li role="presentation">
                                <a href="#thank-you" aria-controls="thank-you" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">4</span>@lang('general.thankyou')</a>
                            </li>
                        </ul>

                        <div class="tab-content">

                            <!-- Select the apartment -->
                            <div role="tabpanel" class="tab-pane fade in active" id="select-room">
                                <div class="mg-available-rooms">
                                    <h2 class="mg-sec-left-title">@lang('general.availApartments'):
                                        <span id="sa-check-in"></span>
                                        <span> - </span>
                                        <span id="sa-check-out"></span>
                                    </h2>
                                    <div id="list-found-aptos" class="mg-avl-rooms">
                                    </div>
                                </div>
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="sa-active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <!-- Steps for the booking -->
                            <div role="tabpanel" class="tab-pane fade" id="personal-info">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="mg-book-form-personal">
                                            <h2 class="mg-sec-left-title">@lang('general.weNeedYourInfoToBooking'):</h2>
                                            <div class="row pb40">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.firstName')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.address')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.city')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.state')">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.lastName')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.postalCode')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.country')">
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 class="mg-sec-left-title">@lang('general.accountFutureBookings'):</h2>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="tel" class="form-control" placeholder="@lang('general.email')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="password" class="form-control" placeholder="@lang('general.password')">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="email" class="form-control" placeholder="@lang('general.telephone')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="password" class="form-control" placeholder="@lang('general.retypePassword')">
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#payment" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.next')</a>
                                            <a href="#select-room" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mg-cart-container">
                                            <aside class="mg-widget mt50" id="mg-room-cart">
                                                <h2 class="mg-widget-title">@lang('general.yourBookingDetails')</h2>
                                                <div class="mg-widget-cart">
                                                    <div class="mg-cart-room">
                                                        <img src="../images/room-1.png" alt="Delux Room" class="img-responsive">
                                                        <h3>Junior Suite</h3>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>$189.99 /@lang('general.night')</strong>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>@lang('general.checkIn'):</strong>
                                                        <span>02 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>@lang('general.checkOut'):</strong>
                                                        <span>06 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>{{trans_choice('general.nights', 4, ['value' => 4])}}</strong>
                                                    </div>
                                                    <div class="mg-cart-total">
                                                        <strong>@lang('general.total'):</strong>
                                                        <span>$759.96</span>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div role="tabpanel" class="tab-pane fade" id="payment">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="mg-book-form-billing">
                                            <h2 class="mg-sec-left-title">
                                                <input type="checkbox"> @lang('general.isYourBillingAddressDiff')
                                            </h2>
                                            <div class="row pb40">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.firstName')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.address')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.city')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.state')">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.lastName')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.postalCode')">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.country')">
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 class="mg-sec-left-title">@lang('general.CreditCardInfo')</h2>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="@lang('general.creditCard')">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="CVV">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="mg-book-form-input">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <select class="form-control">
                                                                    <option value="">@lang('general.month')</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <select class="form-control">
                                                                    <option value="">@lang('general.year')</option>
                                                                    <option value="15">15</option>
                                                                    <option value="16">16</option>
                                                                    <option value="17">17</option>
                                                                    <option value="18">18</option>
                                                                    <option value="19">19</option>
                                                                    <option value="20">20</option>
                                                                    <option value="21">21</option>
                                                                    <option value="22">22</option>
                                                                    <option value="23">23</option>
                                                                    <option value="24">24</option>
                                                                    <option value="25">25</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#thank-you" class="btn btn-dark-main btn-next-tab pull-right">@lang('general.book')</a>
                                            <a href="#personal-info" class="btn btn-default btn-prev-tab pull-left">@lang('general.back')</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mg-cart-container">
                                            <aside class="mg-widget mt50" id="mg-room-cart">
                                                <h2 class="mg-widget-title">@lang('general.yourBookingDetails')</h2>
                                                <div class="mg-widget-cart">
                                                    <div class="mg-cart-room">
                                                        <img src="../images/room-1.png" alt="Delux Room" class="img-responsive">
                                                        <h3>Junior Suite</h3>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>$189.99 /@lang('general.night')</strong>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>@lang('general.checkIn'):</strong>
                                                        <span>02 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>@lang('general.checkOut'):</strong>
                                                        <span>06 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>{{trans_choice('general.nights', 4, ['value' => 4])}}</strong>
                                                    </div>
                                                    <div class="mg-cart-total">
                                                        <strong>@lang('general.total'):</strong>
                                                        <span>$759.96</span>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" class="tab-pane fade" id="thank-you">
                                <div class="alert alert-success alert-dismissible clearfix">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <div class="mg-alert-icon"><i class="fa fa-check"></i></div>
                                    <h3 class="mg-alert-payment">@lang('general.bookingIsConfirmed')</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Template to drawn other aptos by Javascript  -->
    <div id="apto-template" class="mg-avl-room hidden">
        <div class="row">
            <div class="col-sm-5">
                <a class="sa-apto-link" href="#"><img src="{{ asset('images/room-1.png') }}" alt="" class="img-responsive"></a>
            </div>
            <div class="col-sm-7">
                <h3 class="mg-avl-room-title">
                    <a href="#"></a>
                    <span class="sa-apto-price">
                        <span>$249<sup>.99</sup></span>
                        /@lang('general.night')
                    </span>
                </h3>
                <p class="sa-apto-description"></p>
                <div class="row mg-room-fecilities">
                    <div class="col-sm-12">
                    </div>
                </div>
                <a href="#personal-info" class="btn btn-main btn-next-tab">@lang('general.bookApartment')</a>
            </div>
        </div>
    </div>

@endsection
