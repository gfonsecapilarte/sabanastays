@extends('layouts.app')
@section('title', 'Home')
@section('bodyClass', 'booking')
@section('content')

    <div class="preloader"></div>
    <header class="header transp sticky">
        <nav class="navbar navbar-inverse">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src="{{ asset('images/LogoSabanaStays.png') }}" alt="LOGO SABANA STAYS"></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="">Login</a></li>
                        <li class="active"><a href="">EN</a></li>
                        <li><a href="">SP</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </header>

    <div class="mg-page-title parallax">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Booking</h2>
                    <p>Cogitavisse erant puerilis utrum efficiantur adhuc expeteretur.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="mg-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="mg-booking-form">

                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#select-room" aria-controls="select-room" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">1</span><span class="mg-bs-bar"></span>Select your apartment</a>
                            </li>
                            <li role="presentation">
                                <a href="#personal-info" aria-controls="personal-info" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">2</span><span class="mg-bs-bar"></span>Your information</a>
                            </li>
                            <li role="presentation">
                                <a href="#payment" aria-controls="payment" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">3</span><span class="mg-bs-bar"></span>Payment Information</a>
                            </li>
                            <li role="presentation">
                                <a href="#thank-you" aria-controls="thank-you" role="tab" data-toggle="tab"><span class="mg-bs-tab-num">4</span>Thank You</a>
                            </li>
                        </ul>

                        <div class="tab-content">

                            <!-- Select the apartment -->
                            <div role="tabpanel" class="tab-pane fade in active" id="select-room">
                                <div class="mg-available-rooms">
                                    <h2 class="mg-sec-left-title">Available Apartments: Mar 02 2018 to Mar 06 2018</h2>
                                    <div class="mg-avl-rooms">
                                        <div class="mg-avl-room">
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <a href="#"><img src="{{ asset('images/room-1.png') }}" alt="" class="img-responsive"></a>
                                                </div>
                                                <div class="col-sm-7">
                                                    <h3 class="mg-avl-room-title"><a href="#">Penthouse Suite</a> <span>$249<sup>.99</sup>/Night</span></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia minuti firme desperantes vix sempiternum sentiri possunt, philosophia permanentes, sentit careret.</p>
                                                    <div class="row mg-room-fecilities">
                                                        <div class="col-sm-6">
                                                            <ul>
                                                                <li><i class="fp-ht-bed"></i> 2 King Beds</li>
                                                                <li><i class="fp-ht-food"></i> Breakfast</li>
                                                                <li><i class="fa fa-sun-o"></i> Air conditioning</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <ul>
                                                                <li><i class="fp-ht-dumbbell"></i> GYM fecility</li>
                                                                <li><i class="fp-ht-tv"></i> TV LCD</li>
                                                                <li><i class="fp-ht-computer"></i> Wi-fi service</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a href="#personal-info" class="btn btn-main btn-next-tab">Book Apartment</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mg-avl-room">
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <a href="#"><img src="{{ asset('images/room-2.png') }}" alt="" class="img-responsive"></a>
                                                </div>
                                                <div class="col-sm-7">
                                                    <h3 class="mg-avl-room-title"><a href="#">Junior Suite</a> <span>$249<sup>.99</sup>/Night</span></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia minuti firme desperantes vix sempiternum sentiri possunt, philosophia permanentes, sentit careret.</p>
                                                    <div class="row mg-room-fecilities">
                                                        <div class="col-sm-6">
                                                            <ul>
                                                                <li><i class="fp-ht-bed"></i> 2 King Beds</li>
                                                                <li><i class="fp-ht-food"></i> Breakfast</li>
                                                                <li><i class="fa fa-sun-o"></i> Air conditioning</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <ul>
                                                                <li><i class="fp-ht-dumbbell"></i> GYM fecility</li>
                                                                <li><i class="fp-ht-tv"></i> TV LCD</li>
                                                                <li><i class="fp-ht-computer"></i> Wi-fi service</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a href="#personal-info" class="btn btn-main btn-next-tab">Book Apartment</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mg-avl-room">
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <a href="#"><img src="{{ asset('images/room-3.png') }}" alt="" class="img-responsive"></a>
                                                </div>
                                                <div class="col-sm-7">
                                                    <h3 class="mg-avl-room-title"><a href="#">Standar Suite</a> <span>$249<sup>.99</sup>/Night</span></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia minuti firme desperantes vix sempiternum sentiri possunt, philosophia permanentes, sentit careret.</p>
                                                    <div class="row mg-room-fecilities">
                                                        <div class="col-sm-6">
                                                            <ul>
                                                                <li><i class="fp-ht-bed"></i> 2 King Beds</li>
                                                                <li><i class="fp-ht-food"></i> Breakfast</li>
                                                                <li><i class="fa fa-sun-o"></i> Air conditioning</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <ul>
                                                                <li><i class="fp-ht-dumbbell"></i> GYM fecility</li>
                                                                <li><i class="fp-ht-tv"></i> TV LCD</li>
                                                                <li><i class="fp-ht-computer"></i> Wi-fi service</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a href="#personal-info" class="btn btn-main btn-next-tab">Book Apartment</a>
                                                </div>
                                            </div>
                                        </div>
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

                            <div role="tabpanel" class="tab-pane fade" id="personal-info">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="mg-book-form-personal">
                                            <h2 class="mg-sec-left-title">We need your information to complete this booking:</h2>
                                            <div class="row pb40">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="First Name">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Address">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="City">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="State">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Last Name">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Postal Code">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Country">
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 class="mg-sec-left-title">Let's create your account for your future bookings:</h2>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="tel" class="form-control" placeholder="Email">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="password" class="form-control" placeholder="password">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="email" class="form-control" placeholder="Telephone">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="password" class="form-control" placeholder="Retype password">
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#payment" class="btn btn-dark-main btn-next-tab pull-right">Next</a>
                                            <a href="#select-room" class="btn btn-default btn-prev-tab pull-left">Back</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mg-cart-container">
                                            <aside class="mg-widget mt50" id="mg-room-cart">
                                                <h2 class="mg-widget-title">Your Booking Details</h2>
                                                <div class="mg-widget-cart">
                                                    <div class="mg-cart-room">
                                                        <img src="../images/room-1.png" alt="Delux Room" class="img-responsive">
                                                        <h3>Junior Suite</h3>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>$189.99 /Night</strong>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>Check In:</strong>
                                                        <span>02 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>Check Out:</strong>
                                                        <span>06 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>4 Nights</strong>
                                                    </div>
                                                    <div class="mg-cart-total">
                                                        <strong>Total:</strong>
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
                                                <input type="checkbox"> Is your billing address different?
                                            </h2>
                                            <div class="row pb40">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="First Name">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Address">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="City">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="State">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Last Name">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Postal Code">
                                                    </div>
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Country">
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 class="mg-sec-left-title">Credit Card Info</h2>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mg-book-form-input">
                                                        <input type="text" class="form-control" placeholder="Credit Card">
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
                                                                    <option value="">Month</option>
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
                                                                    <option value="">Year</option>
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
                                            <a href="#thank-you" class="btn btn-dark-main btn-next-tab pull-right">Book</a>
                                            <a href="#personal-info" class="btn btn-default btn-prev-tab pull-left">Back</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mg-cart-container">
                                            <aside class="mg-widget mt50" id="mg-room-cart">
                                                <h2 class="mg-widget-title">Booking Details</h2>
                                                <div class="mg-widget-cart">
                                                    <div class="mg-cart-room">
                                                        <img src="../images/room-1.png" alt="Delux Room" class="img-responsive">
                                                        <h3>Junior Suite</h3>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>$189.99 /Night</strong>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>Check In:</strong>
                                                        <span>02 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>Check Out:</strong>
                                                        <span>06 Mar, 2018</span>
                                                    </div>
                                                    <div class="mg-widget-cart-row">
                                                        <strong>4 Nights</strong>
                                                    </div>
                                                    <div class="mg-cart-total">
                                                        <strong>Total:</strong>
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
                                    <h3 class="mg-alert-payment">Thank you! Your booking is confirmed. Invoice Sent in your email address</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
