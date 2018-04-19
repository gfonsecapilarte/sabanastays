/**
 * Module to change the differents steps
 */
import {
    saBookingStepOne,
    saBookingStepTwo,
    saBookingStepThree,
    saBookingStepFour,
    saNextStep
} from "./tabs.js";

/**
 * Modules to call states and cities
 */
import {
    callStates,
    callCities
} from "../location/location.js";

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
                    $('select[name="id_state"]',form).val(address.first.state).attr('readonly',true);
                    $('select[name="id_city"]',form).val(address.first.city).attr('readonly',true);
                    $('input[name="address"]',form).val(address.first.address).attr('readonly',true);
                    $('input[name="postcode"]',form).val(address.first.postalcode).attr('readonly',true);
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
            }
        },
        register: function(){
            $.ajax({
                url: '/api/address/create',
                type: 'POST',
                data: form.serialize()+'&id_user='+user.id+'&api_token='+user.token,
                success: function(reply){
                    if(reply.success != null){
                        address.first.id = reply.id_address;
                    }
                }
            });
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
                        user.done = true;
                        saNextStep($('a[href="#address-form"]'));
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
                    if(reply.success != null){
                        localStorage.setItem('api_token',reply.api_token);
                        localStorage.setItem('id_user',reply.id_user);
                        address.register();
                    }
                }
            });
        }
    }

    /**
     * Credit Card object
     */
    TCO.loadPubKey('sandbox');
    var card = {
        creditCard: null,
        cvv: null,
        month: null,
        year: null,
        token: null,
        done: false,
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
                        card.creditCard = $('input[name="creditCard"]').val();
                        card.cvv        = $('input[name="cvv"]').val();
                        card.month      = $('input[name="month"]').val();
                        card.year       = $('input[name="year"]').val();
                        card.done       = true;
                    }
                });
            },
        },
        checkout:{
            args: {
                // sellerId: sellerId,
                // publishableKey: publishableKey,
                // ccNo: card.creditCard,
                // cvv: card.cvv,
                // expMonth: card.month,
                // expYear: card.year
            },
            token:function(){
                TCO.requestToken(function(response) {
                    card.token = response.response.token.token;
                    if(user.id == null){
                        user.register();
                    }
                },function(error) {
                    //console.log('ERROR', error);
                    //$('#sa-payment-form').children('.alert-success').addClass('hidden');
                    //$('#sa-payment-form').children('.alert-danger').removeClass('hidden').children('span').text(paymentError);
                },card.checkout.args);
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
        card.form.validate();
    }


    /*
     * When somebody select the first tab (1)
     */
    // $('.mg-booking-form > ul > li:nth-child(1)').click(function(e){
    //     e.preventDefault();
    //     saBookingStepOne();
    //     $('a',this).tab('show');
    // });

    /**
     * Click on the second tab (2)
     * User information
     */
    $('.mg-booking-form > ul > li:nth-child(2)').click(function(e){
        e.preventDefault();
        if(apartment.id){
            saBookingStepTwo();
            $('a',this).tab('show');
        }
        else{
            alert('Tiene que seleccionar primero un apto')
        }
    });


    /**
     * Click on the third tab (3)
     * Address
     */
    $('.mg-booking-form > ul > li:nth-child(3)').click(function(e){
        e.preventDefault();
        if(user.done || user.token){
            saBookingStepThree();
            $('a',this).tab('show');
        }
        else{
            alert('Debel diligenciar la información del usuario')
        }
    });


    /**
     * Click on the fourth tab (4)
     * Payment
     */
    $('.mg-booking-form > ul > li:nth-child(4)').click(function(e){
        e.preventDefault();
        if(address.first.done){
            saBookingStepFour();
            $('a',this).tab('show');
        }
        else{
            alert('Debe diligenciar la dirección')
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
            if(card.done){
                card.checkout.token();
            }
        }
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

    /*
     * Do the payment
     */
    var attempt  = 0;
    var bookinID = 0;
    function savePayment(paymentToken){
        var currency = $.parseJSON(localStorage.getItem("currency"));

        if(attempt == 0){
            var data = {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token'),
                id_apartment: apartmentId,
                checkin: localStorage.getItem('checkin'),
                checkout: localStorage.getItem('checkout'),
                tco_token: paymentToken,
                currency_iso: currency.iso_code,
                id_currency: currency.id_currency,
                id_address_booking: address.id_address,
                id_address_payment: secondAddressId
            }
        }
        else{
            var data = {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token'),
                id_apartment: apartmentId,
                checkin: localStorage.getItem('checkin'),
                checkout: localStorage.getItem('checkout'),
                tco_token: paymentToken,
                currency_iso: currency.iso_code,
                id_currency: currency.id_currency,
                id_address_booking: address.id_address,
                id_address_payment: secondAddressId,
                attempt: attempt,
                id_booking: bookinID
            }
        }

        $.ajax({
            url: '/api/booking/create',
            type: 'POST',
            data: data,
            success: function(payment){
                if(payment.success != null){
                    if(!payment.success){
                        $('#sa-payment-form').children('.alert-success').addClass('hidden');
                        $('#sa-payment-form').children('.alert-danger').removeClass('hidden').children('span').text(payment.message);
                        if(payment.attempt != null){
                            attempt  = attempt + payment.attempt;
                            bookinID = payment.id_booking;
                            alert("Intento "+attempt);
                        }
                    }
                }
                else{
                    console.log(payment);
                }
            }
        });
    }

});
