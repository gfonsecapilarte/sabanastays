/**
 * Module to change the differents steps
 */
import {
    saBookingStepOne,
    saBookingStepTwo,
    saBookingStepThree,
    saBookingStepFour,
    saNextStep,
    saPrevStep
} from "./tabs.js";

/**
 * Modules to call states and cities
 */
import {
    callStates,
    callCities
} from "../location/location.js";

/**
 * Modules to show error and success messages
 */
import {
    errorMessage,
    successMessage
} from "../messages/messages.js";

/**
 * Module to convert dates to human format
 */
import {
    converDate,
    calculateNights
} from "../dates/dates.js";

/**
 * jquery Module to validate forms
 */
let validate = require('jquery-validation');
require('../../../../node_modules/jquery-validation/dist/additional-methods.js');

$(document).ready(function () {

    /**
     * Booking object
     */
    var booking = {
        id_booking: null,
        incompleteBooking: function (callback) {
            $.ajax({
                url: '/api/booking/incomplete',
                type: 'POST',
                cache: false,
                dataType: 'json',
                data: {
                    id_booking: booking.id_booking
                },
                success: function (response) {
                    if (response.success) {
                        callback(true);
                    } else {
                        callback(false, response.message);
                    }
                }
            });
        }
    }

    /**
     * Apartment object
     */
    var apartment = {
        id: null,
    }

    /**
     * Address object
     */
    var address = {
        first: {
            id: null,
            done: false,
            country: null,
            state: null,
            city: null,
            address: '',
            postalcode: '',
            validate: function () {
                $('#sa-address').validate({
                    submitHandler: function (form) {
                        address.first.country = $('select[name="id_country"]', form).val();
                        address.first.state = $('select[name="id_state"]', form).val();
                        address.first.city = $('select[name="id_city"]', form).val();
                        address.first.address = $('input[name="address"]', form).val();
                        address.first.postalcode = $('input[name="postcode"]', form).val();
                        address.first.done = true;
                        address.second.form.fill();
                    },
                    invalidHandler: function (event, validator) {
                        address.first.done = false;
                    }
                });
            },
            register: function (callback) {
                $.ajax({
                    url: '/api/address/create',
                    type: 'POST',
                    data: $('#sa-address').serialize() + '&id_user=' + user.id + '&api_token=' + user.token,
                    success: function (reply) {
                        if (reply.success != null) {
                            address.first.id = reply.address.id_address;
                            if (address.second.different) {
                                address.second.register(callback);
                            }
                            else {
                                address.second.id = reply.address.id_address;
                                // payment.pay();
                                // payment.checkout.token();
                                if (callback != undefined) {
                                    callback(true);
                                } else {
                                    payment.checkout.token();
                                }
                            }
                        } else {
                            callback(false);
                        }
                    }
                });
            }
        },
        second: {
            id: null,
            done: false,
            country: null,
            state: null,
            city: null,
            address: '',
            postalcode: '',
            different: false,
            form: {
                fill: function () {
                    var form = $('#sa-payment-form');
                    $('select[name="id_country"]', form).val(address.first.country).attr('readonly', true);
                    $('input[name="address"]', form).val(address.first.address).attr('readonly', true);
                    $('input[name="postcode"]', form).val(address.first.postalcode).attr('readonly', true);

                    callStates(form).then(function (states) {
                        $('select[name="id_state"]', form).val(address.first.state).attr('readonly', true);
                        callCities(form).then(function () {
                            $('select[name="id_city"]', form).val(address.first.city).attr('readonly', true);
                        });
                    });

                    address.second.different = false;
                },
                clean: function () {
                    var form = $('#sa-payment-form');
                    $('select[name="id_country"]', form).val('').attr('readonly', false);
                    $('select[name="id_state"]', form).val('').attr('readonly', false);
                    $('select[name="id_city"]', form).val('').attr('readonly', false);
                    $('input[name="address"]', form).val('').attr('readonly', false);
                    $('input[name="postcode"]', form).val('').attr('readonly', false);
                    address.second.different = true;
                }
            },
            register: function (callback) {
                $.ajax({
                    url: '/api/address/create',
                    type: 'POST',
                    data: $('#sa-payment-form').serialize() + '&id_user=' + user.id + '&api_token=' + user.token,
                    success: function (reply) {
                        if (reply.success != null) {
                            address.second.id = reply.address.id_address;
                            // payment.pay();
                            // payment.checkout.token();
                            if (callback != undefined) {
                                callback(true);
                            } else {
                                payment.checkout.token();
                            }
                        } else {
                            callback(false);
                        }
                    }
                });
            }
        }
    }

    /**
     * User object
     */


    var user = {
        id: localStorage.getItem('id_user'),
        token: localStorage.getItem('api_token'),
        done: false,
        checkSession: function () {
            if (user.token != null) {
                return true;
            }
            else {
                return false;
            }
        },
        forms: {
            login: {
                hide: function () {
                    $('#contLoginUser').addClass('hidden');
                },
                validate: function () {
                    $('#sa-login-two').validate({
                        submitHandler: function (form) {
                            user.login();
                        }
                    });
                }
            },
            register: {
                hide: function () {
                    $('#contRegisterUser').addClass('hidden');
                },
                validate: function () {
                    $('#sa-register-two').validate({
                        submitHandler: function (form) {
                            user.done = true;
                        },
                        invalidHandler: function (event, validator) {
                            user.done = false;
                        }
                    });
                }
            }
        },
        login: function () {
            $('#loader').show();
            $.ajax({
                url: '/api/user/login',
                type: 'POST',
                data: $('#sa-login-two').serialize(),
                success: function (reply) {
                    $('#loader').hide();
                    if (reply.success == null) {
                        localStorage.setItem('api_token', reply.api_token);
                        localStorage.setItem('id_user', reply.id_user);
                        localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                        user.id = reply.id_user;
                        user.token = reply.api_token;
                        user.done = true;
                        saNextStep($('a[href="#address-form"]'));
                        $('.mg-book-form-personal > div').hide();
                        $('#login-menu-item').hide();
                        $('#user-menu-item').removeClass('hidden');
                    }
                    else if (reply.success == false) {
                        errorMessage($('.mg-booking-form'), reply.message);
                    }
                }
            });
        },
        register: function (callback) {
            $.ajax({
                url: '/api/user',
                type: 'POST',
                data: $('#sa-register-two').serialize(),
                success: function (reply) {
                    if (reply.id_user != null) {
                        localStorage.setItem('api_token', reply.api_token);
                        localStorage.setItem('id_user', reply.id_user);
                        localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                        user.id = reply.id_user;
                        user.token = reply.api_token;
                        // address.first.register();
                        if (callback != undefined) {
                            callback(true)
                        } else {
                            address.first.register();
                        }
                    }
                    else {
                        errorMessage($('.mg-booking-form'), reply.message);
                        saNextStep($('a[href="#personal-info-form"]'));

                        if (callback != undefined) {
                            callback(false);
                        }
                    }
                }
            });
        }
    }


    /**
     * Credit Card object
     */
    var payment = {};
    if ($('#sa-address').length > 0) {
        // TCO.loadPubKey('sandbox');
        payment = {
            token: null,
            done: false,
            attempt: 0,
            booking: 0,
            form: {
                validate: function () {
                    $('#sa-payment-form').validate({
                        rules: {
                            creditCard: {
                                creditcard: true
                            },
                            cvv: {
                                maxlength: 3,
                                digits: true,
                                minlength: 3
                            },
                            month: {
                                maxlength: 2,
                                digits: true
                            },
                            year: {
                                maxlength: 4,
                                digits: true,
                                minlength: 4
                            }
                        },
                        submitHandler: function (form) {

                            $('#loader').show();
                            payment.checkout.args.ccNo = $('input[name="creditCard"]').val();
                            payment.checkout.args.cvv = $('input[name="cvv"]').val();
                            payment.checkout.args.expMonth = $('input[name="month"]').val();
                            payment.checkout.args.expYear = $('input[name="year"]').val();
                            payment.done = true;

                            if (user.checkSession()) {
                                console.log('Login');
                                // If Login
                                if (payment.done) {
                                    if (payment.attempt == 0) {
                                        payment.checkout.token();
                                    }
                                    else {
                                        payment.pay();
                                    }
                                }
                            }
                            else {
                                console.log('NO LOGIN');
                                user.register();
                            }


                        }
                    });
                },
            },
            checkout: {
                args: {
                    //                sellerId: sellerId,
                    //                publishableKey: publishableKey,
                    ccNo: null,
                    cvv: null,
                    expMonth: null,
                    expYear: null
                },
                token: function () {
                    /*get token*/
                    $.ajax({
                        url: '/api/booking/request',
                        type: 'POST',
                        data: {
                            data: window.btoa(JSON.stringify(payment.checkout.args))
                        },
                        success: function (response) {
                            if (response.success) {
                                payment.pay(response.token);
                            } else {
                                alert(response.message);
                            }
                        }
                    });

                    return;

                    // console.log('args', payment.checkout.args);
                    // alert('sad');
                    // TCO.requestToken(function(response) {
                    //     payment.token = response.response.token.token;
                    //     if(user.id == null){
                    //         user.register();
                    //     }
                    //     else{
                    //         address.first.register();
                    //     }
                    // },function(error) {
                    //     console.log('ERROR', error);
                    // },payment.checkout.args);
                }
            },
            pay: function (token) {

                var currency = $.parseJSON(localStorage.getItem("currency"));
                var data = {
                    id_user: user.id,
                    api_token: user.token,
                    id_apartment: apartment.id,
                    checkin: localStorage.getItem('checkin'),
                    checkout: localStorage.getItem('checkout'),
                    nights: localStorage.getItem('nights'),
                    //                tco_token: payment.token,
                    token: token,
                    currency_iso: currency.iso_code,
                    id_currency: currency.id_currency,
                    id_address_booking: address.first.id,
                    id_address_payment: address.second.id
                };

                if (payment.attempt > 0) {
                    data.attempt = payment.attempt + 1;
                    data.id_booking = payment.booking;
                }

                $.ajax({
                    url: '/api/booking/create',
                    type: 'POST',
                    data: data,
                    success: function (reply) {

                        $('#loader').hide();

                        if (reply.success != null && reply.success == false) {
                            payment.attempt = reply.attempt;
                            payment.booking = reply.id_booking;
                            if (payment.attempt != null) {
                                errorMessage($('.mg-booking-form'), reply.message + '. ' + attempt + ' ' + payment.attempt);
                            }
                            else {
                                errorMessage($('.mg-booking-form'), reply.message);
                            }
                        }
                        else {
                            if (reply.booking.status == 'PAID') {
                                //                            successMessage($('.mg-booking-form'),reply.checkout.responseMsg);
                                successMessage($('.mg-booking-form'), 'Successful');
                                location.href = myBookingsLink;
                            }
                        }
                    }
                });
            }
        }
    }

    /*
     * Validate all forms
     */
    if ($('#sa-address').length > 0) {
        user.forms.login.validate();
        user.forms.register.validate();
        address.first.validate();
        payment.form.validate();
    }


    /*
     * Click on the first tab (1)
     * Apartment
     */
    $('.mg-booking-form > ul > li:nth-child(1)').click(function (e) {
        e.preventDefault();
        saBookingStepOne();
        $('a', this).tab('show');
    });

    /**
     * Click on the second tab (2)
     * User information
     */
    $('.mg-booking-form > ul > li:nth-child(2)').click(function (e) {
        e.preventDefault();
        if (apartment.id) {
            saBookingStepTwo();
            $('a', this).tab('show');
            if (user.token) {
                $('.mg-book-form-personal > div').hide();
            }

            /** Draw values in sidebar **/
            showSidebarData();
            $('.mg-booking-form .alert-danger').addClass('hidden');
        }
        else {
            errorMessage($('.mg-booking-form'), apartmentWarning);
        }
    });


    /**
     * Click on the third tab (3)
     * Address
     */
    $('.mg-booking-form > ul > li:nth-child(3)').click(function (e) {
        e.preventDefault();
        if (apartment.id) {
            $('#sa-register-two').submit();
            if (user.done || user.token) {
                saBookingStepThree();
                showSidebarData();
                $('a', this).tab('show');
                $('.mg-booking-form .alert-danger').addClass('hidden');
            }
            else {
                errorMessage($('.mg-booking-form'), infoUserWarning);
            }
        }
        else {
            errorMessage($('.mg-booking-form'), apartmentWarning);
        }
    });


    /**
     * Click on the fourth tab (4)
     * Payment
     */
    $('.mg-booking-form > ul > li:nth-child(4)').click(function (e) {
        e.preventDefault();
        if (apartment.id) {
            $('#sa-register-two').submit();
            if (user.done || user.token) {
                $('#sa-address').submit();
                if (address.first.done) {
                    saBookingStepFour();
                    $('a', this).tab('show');
                    $('.mg-booking-form .alert-danger').addClass('hidden');
                }
                else {
                    errorMessage($('.mg-booking-form'), adrressWarning);
                }
            }
            else {
                errorMessage($('.mg-booking-form'), infoUserWarning);
            }
        }
        else {
            errorMessage($('.mg-booking-form'), apartmentWarning);
        }
    });

    /**
     * Event on next button
     * Steps:
     * 1. Select apartment
     * 2. Login or register
     * 3. First address
     * 4. Payment
     */
    $('.tab-content').on('click', '.btn-next-tab', function (e) {
        e.preventDefault();
        var goTo = $(this).attr('href');
        if (goTo == '#personal-info-form') {
            apartment.id = $(this).attr('id').split('_')[1];
            if (user.done || user.token) {
                saNextStep($('a[href="#address-form"]'));
            }
            else {
                saNextStep($(this));
            }
        }
        else if (goTo == '#address-form') {
            $('#sa-register-two').submit();
            if (user.done || user.token) {
                saNextStep($(this));
            }
        }
        else if (goTo == '#payment-form') {
            $('#sa-address').submit();
            if (address.first.done) {
                saNextStep($(this));
            }
        }
        else if (goTo == '#payment') {
            $('#sa-payment-form').submit();
        }
    });

    /**
     * Event on prev button
     */
    $('.tab-content').on('click', '.btn-prev-tab', function (e) {
        e.preventDefault();
        saPrevStep($(this));
    });

    /*
     * Check or not if the billing address
     */
    $('#sa-check-diff-address').click(function () {
        if ($(this).is(':checked')) {
            address.second.form.clean();
        }
        else {
            address.second.form.fill();
        }
    });

    /*
     * Function to load data on sidebar
     */
    function showSidebarData() {
        var sidebarData = _apartments.find(x => x.id == apartment.id);
        var checkIn = localStorage.getItem('checkin');
        var checkOut = localStorage.getItem('checkout');
        var nights = calculateNights(checkIn, checkOut);

        $('#mg-room-cart .apartment-image').attr('src', mainUrl + '/' + sidebarData.image);
        $('#mg-room-cart .apartment-title').text(sidebarData.name);
        $('#mg-room-cart .apartment-price').text(sidebarData.price);
        $('#mg-room-cart .apartment-checkin').text(converDate(checkIn));
        $('#mg-room-cart .apartment-checkout').text(converDate(checkOut));

        if (nights == 1) {
            $('#mg-room-cart .apartment-night').removeClass('hidden').children('.nights').text(nights);
        }
        else {
            $('#mg-room-cart .apartment-nights').removeClass('hidden').children('.nights').text(nights);
        }

        var total = sidebarData.price * nights;
        $('#mg-room-cart .apartment-total').text(total.toFixed(2));
    }


    if ($('#sa-payment-form')) {
        // Render the PayPal button
        paypal.Button.render({

            // Set your environment

            //env: 'sandbox', // sandbox | production
            env: paypalType,

            // Specify the style of the button

            style: {
                label: 'buynow',
                fundingicons: true, // optional
                branding: true, // optional
                size: 'small', // small | medium | large | responsive
                shape: 'rect',   // pill | rect
                color: 'gold'   // gold | blue | silver | black
            },

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create

            client: {
                sandbox: paypalKeySandbox,
                production: paypalKeyProduction
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // Wait for the PayPal button to be clicked

            payment: function (data, actions) {

                return checkout().then(function (msj) {
                    if (msj) {

                        var currency = $.parseJSON(localStorage.getItem("currency"));

                        var params = {
                            id_user: user.id,
                            api_token: user.token,
                            id_apartment: apartment.id,
                            checkin: localStorage.getItem('checkin'),
                            checkout: localStorage.getItem('checkout'),
                            nights: localStorage.getItem('nights'),
                            currency_iso: currency.iso_code,
                            id_currency: currency.id_currency,
                            id_address_booking: address.first.id,
                            id_address_payment: address.second.id
                        };


                        if (booking.id_booking != null) {
                            params.id_booking = booking.id_booking
                        }

                        console.log("=== params pay ===");
                        console.log(params);
                        // return actions.request.post('/api/booking/paypal/create').then(function (res) {
                        return actions.request.post('/api/booking/create', params).then(function (res) {
                            console.log('====');
                            console.log(res);
                            console.log(booking.id_booking);

                            booking.id_booking = res.booking.id_booking;
                            console.log('====');
                            console.log(res);
                            console.log(booking.id_booking);
                            return res.id;
                        });
                    }
                });
            },

            // Wait for the payment to be authorized by the customer
            onAuthorize: function (data, actions) {

                console.log('===onAuthorize =');
                console.log(booking.id_booking);
                console.log('===End onAuthorize =');
                // return;

                var currency = $.parseJSON(localStorage.getItem("currency"));

                return actions.request.post('/api/booking/paypal/execute', {
                    paymentID: data.paymentID,
                    payerID: data.payerID,
                    id_user: user.id,
                    api_token: user.token,
                    id_booking: booking.id_booking,
                    id_currency: currency.id_currency
                }).then(function (res) {
                    // 3. Show the buyer a confirmation message.
                    console.log(res);
                    if (res.booking.status == 'PAID') {
                        successMessage($('.mg-booking-form'), 'Successful');
                        location.href = myBookingsLink;
                    }
                });
            },

            onCancel: function (data, actions) {
                // Show a cancel page or return to cart
                console.log('====');
                console.log("onCancel");

                errorMessage($('.mg-booking-form'), "Your booking are incomplete");
            },

            onError: function (err) {
                // Show an error page here, when an error occurs
                console.log('====');
                console.log("onError", err);
            }


        }, '#paypal-button-container');
    } 


    var checkout = function (data) {
        return new Promise(
            function (resolve, reject) {
                if (user.checkSession()) {
                    if (booking.id_booking != null) {
                        resolve(true);
                    } else {
                        address.first.register(function (result) {
                            resolve(result);
                        });
                    }
                } else {
                    user.register(function (response) {
                        address.first.register(function (result) {
                            resolve(result);
                        });
                    });
                }
            }
        );
    };
});
