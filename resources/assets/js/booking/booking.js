import { saBookingStepOne, saBookingStepTwo, saBookingStepThree, saBookingStepFour, saNextStep } from "./tabs.js";
import { callStates, callCities } from "../location/location.js";
let validate = require('jquery-validation');
require('../../../../node_modules/jquery-validation/dist/additional-methods.js');

$(document).ready(function() {
    var aptoSelected    = false,
        adressInfo      = false,
        paymentDone     = false,
        apartmentId     = 0,
        address         = null,
        secondAddressId = null;

    /*
     * Hidden forms if api token exists
     */
    if(localStorage.getItem('api_token') != null){
        if($('#contLoginUser').length > 0){
            $('#contLoginUser').addClass('hidden');
            $('#contRegisterUser').addClass('hidden');
        }
    }

    /*
     * Validate address form
     */
    if($('#sa-address').length > 0){
        $('#sa-address').validate({
            submitHandler: function(form) {
                saveAdress($('#sa-address')).then(function(reply){
                    if(reply.success){
                        adressInfo  = true;
                        address     = reply.address;
                        $('#sa-address').children('.alert-success').removeClass('hidden').children('span').text(addressSuccess);
                        setTimeout(function(){
                            paymentAddress();
                            $('a[href="#payment"]').parents('li').trigger('click');
                        },2000);
                    }
                });
            },
            invalidHandler: function(event, validator) {
                //paymentDone = false;
            }
        });
    }

    /*
     * Validate form of payment
     */
    if($('#sa-payment-form').length > 0){
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
            submitHandler: function(form) {
                if(!$('#sa-check-diff-address').is(':checked')){
                    secondAddressId = address.id_address;
                    generataPaymentToken();
                }
                else{
                    saveAdress($('#sa-payment-form')).then(function(reply){
                        secondAddressId = reply.address.id_address;
                        generataPaymentToken();
                    });
                }
            },
            invalidHandler: function(event, validator) {
                paymentDone = false;
            }
        });
    }

    /*
     * When somebody select the first tab (1)
     */
    $('.mg-booking-form > ul > li:nth-child(1)').click(function(e){
        e.preventDefault();
        saBookingStepOne();
        $('a',this).tab('show');
    });

    /*
     * When somebody select the second tab (2)
     * If the apartment has not been selected this will return an error message
     */
    $('.mg-booking-form > ul > li:nth-child(2)').click(function(e){
        e.preventDefault();
        if(!aptoSelected){
            alert('Tiene que seleccionar primero un apto')
        }
        else{
            saBookingStepTwo();
            $('a',this).tab('show');
        }
    });

    /*
     * When somebody select the third tab (3)
     * If the apartment has not been selected this will return an error message
     */
    $('.mg-booking-form > ul > li:nth-child(3)').click(function(e){
        e.preventDefault();
        if(!aptoSelected){
            alert("tiene que seleccionar primero un apto")
        }
        else{
            if(localStorage.getItem('api_token') == null){
                alert('Tiene que diligenciar la información personal')
            }
            else{
                if(!adressInfo){
                    alert('Tiene que diligenciar la dirección');
                }
                else{
                    saBookingStepThree();
                    $('a',this).tab('show');
                }
            }
        }
    });

    /*
     * Event over next button
     * - if the event is triggered on a apartment button to choose it, it will go to the next step
     */
    $('.tab-content').on('click','.btn-next-tab',function(e){
        e.preventDefault();
        if($(this).attr('href') == '#personal-info'){
            apartmentId = $(this).attr('id').split('_')[1];
            aptoSelected = true;
            saNextStep($(this));
        }
        else if($(this).attr('href') == '#payment'){
            if(localStorage.getItem('api_token') == null){
                alert('Tiene que diligenciar la información personal')
            }
            else{
                if(!adressInfo){
                    alert('Tiene que diligenciar la dirección');
                }
                else{
                    saNextStep($(this));
                }
            }
        }
        else if($(this).attr('href') == '#thank-you'){
            $('#sa-payment-form').submit();
        }
    });

    /*
     * Check or not if the billing address
     */
    $('#sa-check-diff-address').click(function(){
        if($(this).is(':checked')){
            $('#sa-payment-form select[name="id_country"]').attr('readonly',false);
            $('#sa-payment-form select[name="id_city"]').attr('readonly',false);
            $('#sa-payment-form select[name="id_state"]').attr('readonly',false);
            $('#sa-payment-form input[name="address"]').attr('readonly',false);
            $('#sa-payment-form input[name="postcode"]').attr('readonly',false);
        }
        else{
            $('#sa-payment-form select[name="id_country"]').attr('readonly',true);
            $('#sa-payment-form select[name="id_city"]').attr('readonly',true);
            $('#sa-payment-form select[name="id_state"]').attr('readonly',true);
            $('#sa-payment-form input[name="address"]').attr('readonly',true);
            $('#sa-payment-form input[name="postcode"]').attr('readonly',true);
            paymentAddress();
        }
    });

    /*
     * Function to save the primary address
     */
    function saveAdress(form){
        var ajax = $.ajax({
            url: '/api/address/create',
            type: 'POST',
            data: form.serialize()+'&id_user='+localStorage.getItem('id_user')+'&api_token='+localStorage.getItem('api_token'),
        });

        return ajax;
    }

    /*
     * Function to load de first address in form to pay
     */
    function paymentAddress(){
        var form = $('#sa-payment-form');
        $('select[name="id_country"]',form).val(address.id_country);
        callStates().then(function(){
            $('select[name="id_state"]',form).val(address.id_state);
            callCities().then(function(){
                $('select[name="id_city"]',form).val(address.id_city);
                $('input[name="address"]',form).val(address.address);
                $('input[name="postcode"]',form).val(address.postcode);
            });
        });
    }

    /*
     * Generate token in 2checkout
     */
    TCO.loadPubKey('sandbox');
    function generataPaymentToken(){
        var args = {
            sellerId: sellerId,
            publishableKey: publishableKey,
            ccNo: $('input[name="creditCard"]').val(),
            cvv: $('input[name="cvv"]').val(),
            expMonth: $('input[name="month"]').val(),
            expYear: $('input[name="year"]').val()
        };

        TCO.requestToken(function(response) {
            savePayment(response.response.token.token);
        },function(error) {
            //console.log('ERROR', error);
            $('#sa-payment-form').children('.alert-success').addClass('hidden');
            $('#sa-payment-form').children('.alert-danger').removeClass('hidden').children('span').text(paymentError);
        },args);
    }

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
