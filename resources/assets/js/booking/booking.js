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
 * jquery Module to validate forms
 */
let validate = require('jquery-validation');
require('../../../../node_modules/jquery-validation/dist/additional-methods.js');

$(document).ready(function() {
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
        first:{
            id: null,
            done: false,
            country: null,
            state: null,
            city: null,
            address: '',
            postalcode: '',
            validate:function(){
                $('#sa-address').validate({
                    submitHandler: function(form){
                        address.first.country     = $('select[name="id_country"]',form).val();
                        address.first.state       = $('select[name="id_state"]',form).val();
                        address.first.city        = $('select[name="id_city"]',form).val();
                        address.first.address     = $('input[name="address"]',form).val();
                        address.first.postalcode  = $('input[name="postcode"]',form).val();
                        address.first.done        = true;
                        address.second.form.fill();
                    },
                    invalidHandler: function(event, validator) {
                        address.first.done = false;
                    }
                });
            },
            register: function(){
                $.ajax({
                    url: '/api/address/create',
                    type: 'POST',
                    data: $('#sa-address').serialize()+'&id_user='+user.id+'&api_token='+user.token,
                    success: function(reply){
                        if(reply.success != null){
                            address.first.id = reply.address.id_address;
                            if(address.second.different){
                                address.second.register();
                            }
                            else{
                                address.second.id = reply.address.id_address;
                                payment.pay();
                            }
                        }
                    }
                });
            }
        },
        second:{
            id: null,
            done: false,
            country: null,
            state: null,
            city: null,
            address: '',
            postalcode: '',
            different: false,
            form:{
                fill: function(){
                    var form = $('#sa-payment-form');
                    $('select[name="id_country"]',form).val(address.first.country).attr('readonly',true);
                    $('input[name="address"]',form).val(address.first.address).attr('readonly',true);
                    $('input[name="postcode"]',form).val(address.first.postalcode).attr('readonly',true);

                    callStates(form).then(function(states){
                        $('select[name="id_state"]',form).val(address.first.state).attr('readonly',true);
                        callCities(form).then(function(){
                            $('select[name="id_city"]',form).val(address.first.city).attr('readonly',true);
                        });
                    });

                    address.second.different = false;
                },
                clean:function(){
                    var form = $('#sa-payment-form');
                    $('select[name="id_country"]',form).val('').attr('readonly',false);
                    $('select[name="id_state"]',form).val('').attr('readonly',false);
                    $('select[name="id_city"]',form).val('').attr('readonly',false);
                    $('input[name="address"]',form).val('').attr('readonly',false);
                    $('input[name="postcode"]',form).val('').attr('readonly',false);
                    address.second.different = true;
                }
            },
            register: function(){
                $.ajax({
                    url: '/api/address/create',
                    type: 'POST',
                    data: $('#sa-payment-form').serialize()+'&id_user='+user.id+'&api_token='+user.token,
                    success: function(reply){
                        if(reply.success != null){
                            address.second.id = reply.address.id_address;
                            payment.pay();
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
        checkSession: function(){
            if(user.token != null){
                return false;
            }
            else{
                return true;
            }
        },
        forms:{
            login:{
                hide: function(){
                    $('#contLoginUser').addClass('hidden');
                },
                validate: function(){
                    $('#sa-login-two').validate({
                        submitHandler: function(form){
                            user.login();
                        }
                    });
                }
            },
            register:{
                hide: function(){
                    $('#contRegisterUser').addClass('hidden');
                },
                validate: function(){
                    $('#sa-register-two').validate({
                        submitHandler: function(form){
                            user.done = true;
                        },
                        invalidHandler: function(event, validator) {
                            user.done = false;
                        }
                    });
                }
            }
        },
        login: function(){
            $.ajax({
                url: '/api/user/login',
                type: 'POST',
                data: $('#sa-login-two').serialize(),
                success: function(reply){
                    if(reply.success == null){
                        localStorage.setItem('api_token',reply.api_token);
                        localStorage.setItem('id_user',reply.id_user);
                        user.id    = reply.id_user;
                        user.token = reply.api_token;
                        user.done = true;
                        saNextStep($('a[href="#address-form"]'));
                        $('.mg-book-form-personal > div').hide();
                    }
                    else if(reply.success == false){
                        errorMessage($('.mg-booking-form'),reply.message);
                    }
                }
            });
        },
        register:function(){
            $.ajax({
                url: '/api/user',
                type: 'POST',
                data: $('#sa-register-two').serialize(),
                success: function(reply){
                    if(reply.id_user != null){
                        localStorage.setItem('api_token',reply.api_token);
                        localStorage.setItem('id_user',reply.id_user);
                        user.id    = reply.id_user;
                        user.token = reply.api_token;
                        address.first.register();
                    }
                    else{
                        errorMessage($('.mg-booking-form'),reply.message);
                        saNextStep($('a[href="#personal-info-form"]'));
                    }
                }
            });
        }
    }

    /**
     * Credit Card object
     */
    var payment = {};
    if($('#sa-address').length > 0){
        TCO.loadPubKey('sandbox');
        payment = {
        token: null,
        done: false,
        attempt: 0,
        booking: 0,
        form:{
            validate: function(){
                $('#sa-payment-form').validate({
                    rules: {
                        creditCard: {
                            creditcard: true
                        },
                        cvv:{
                            maxlength: 3,
                            digits: true,
                            minlength: 3
                        },
                        month:{
                            maxlength: 2,
                            digits: true
                        },
                        year:{
                            maxlength: 4,
                            digits: true,
                            minlength: 4
                        }
                    },
                    submitHandler: function(form){
                        payment.checkout.args.ccNo       = $('input[name="creditCard"]').val();
                        payment.checkout.args.cvv        = $('input[name="cvv"]').val();
                        payment.checkout.args.expMonth   = $('input[name="month"]').val();
                        payment.checkout.args.expYear    = $('input[name="year"]').val();
                        payment.done                     = true;

                        if(payment.done){
                            if(payment.attempt == 0){
                                payment.checkout.token();
                            }
                            else{
                                payment.pay();
                            }

                        }
                    }
                });
            },
        },
        checkout:{
            args: {
                sellerId: sellerId,
                publishableKey: publishableKey,
                ccNo: null,
                cvv: null,
                expMonth: null,
                expYear: null
            },
            token:function(){
                TCO.requestToken(function(response) {
                    payment.token = response.response.token.token;
                    if(user.id == null){
                        user.register();
                    }
                    else{
                        address.first.register();
                    }
                },function(error) {
                    console.log('ERROR', error);
                },payment.checkout.args);
            }
        },
        pay: function(){
            var currency = $.parseJSON(localStorage.getItem("currency"));
            var data = {
                id_user: user.id,
                api_token: user.token,
                id_apartment: apartment.id,
                checkin: localStorage.getItem('checkin'),
                checkout: localStorage.getItem('checkout'),
                tco_token: payment.token,
                currency_iso: currency.iso_code,
                id_currency: currency.id_currency,
                id_address_booking: address.first.id,
                id_address_payment: address.second.id
            }

            if(payment.attempt > 0){
                data.attempt    = payment.attempt + 1;
                data.id_booking = payment.booking;
            }

            $.ajax({
                url: '/api/booking/create',
                type: 'POST',
                data: data,
                success: function(reply){
                    console.log(reply);

                    if(reply.success != null && reply.success == false){
                        payment.attempt = reply.attempt;
                        payment.booking = reply.id_booking;
                        if(payment.attempt != null){
                            errorMessage($('.mg-booking-form'),reply.message+'. '+attempt+' '+payment.attempt);
                        }
                        else{
                            errorMessage($('.mg-booking-form'),reply.message);
                        }
                    }
                    else{
                        if(reply.booking.status == 'PAID'){
                            successMessage($('.mg-booking-form'),reply.checkout.responseMsg);

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
    if($('#sa-address').length > 0){
        user.forms.login.validate();
        user.forms.register.validate();
        address.first.validate();
        payment.form.validate();
    }


    /*
     * Click on the first tab (1)
     * Apartment
     */
    $('.mg-booking-form > ul > li:nth-child(1)').click(function(e){
        e.preventDefault();
        saBookingStepOne();
        $('a',this).tab('show');
    });

    /**
     * Click on the second tab (2)
     * User information
     */
    $('.mg-booking-form > ul > li:nth-child(2)').click(function(e){
        e.preventDefault();
        if(apartment.id){
            saBookingStepTwo();
            $('a',this).tab('show');
            if(user.token){
                $('.mg-book-form-personal > div').hide();
            }
        }
        else{
            errorMessage($('.mg-booking-form'),apartmentWarning);
        }
    });


    /**
     * Click on the third tab (3)
     * Address
     */
    $('.mg-booking-form > ul > li:nth-child(3)').click(function(e){
        e.preventDefault();
        if(apartment.id){
            $('#sa-register-two').submit();
            if(user.done || user.token){
                saBookingStepThree();
                $('a',this).tab('show');
            }
            else{
                errorMessage($('.mg-booking-form'),infoUserWarning);
            }
        }
        else{
            errorMessage($('.mg-booking-form'),apartmentWarning);
        }
    });


    /**
     * Click on the fourth tab (4)
     * Payment
     */
    $('.mg-booking-form > ul > li:nth-child(4)').click(function(e){
        e.preventDefault();
        if(apartment.id){
            $('#sa-register-two').submit();
            if(user.done || user.token){
                $('#sa-address').submit();
                if(address.first.done){
                    saBookingStepFour();
                    $('a',this).tab('show');
                }
                else{
                    errorMessage($('.mg-booking-form'),adrressWarning);
                }
            }
            else{
                errorMessage($('.mg-booking-form'),infoUserWarning);
            }
        }
        else{
            errorMessage($('.mg-booking-form'),apartmentWarning);
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
    $('.tab-content').on('click','.btn-next-tab',function(e){
        e.preventDefault();
        var goTo = $(this).attr('href');
        if(goTo == '#personal-info-form'){
            apartment.id = $(this).attr('id').split('_')[1];
            saNextStep($(this));
        }
        else if(goTo == '#address-form'){
            $('#sa-register-two').submit();
            if(user.done || user.token){
                saNextStep($(this));
            }
        }
        else if(goTo == '#payment-form'){
            $('#sa-address').submit();
            if(address.first.done){
                saNextStep($(this));
            }
        }
        else if(goTo == '#payment'){
            $('#sa-payment-form').submit();
        }
    });

    /**
     * Event on prev button
     */
    $('.tab-content').on('click','.btn-prev-tab',function (e) {
		e.preventDefault();
        saPrevStep($(this));
	});

    /*
     * Check or not if the billing address
     */
    $('#sa-check-diff-address').click(function(){
        if($(this).is(':checked')){
            address.second.form.clean();
        }
        else{
            address.second.form.fill();
        }
    });
});
