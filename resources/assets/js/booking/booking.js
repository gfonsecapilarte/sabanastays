import { saBookingStepOne, saBookingStepTwo, saBookingStepThree, saBookingStepFour, saNextStep } from "./tabs.js";
import { saAddValidationRules, saRemoveValidationRules } from "./validations.js";


let validate = require('jquery-validation');

$(document).ready(function() {
    var aptoSelected = false,
        adressInfo   = false,
        paymentDone  = false,
        id_apartment = 0;

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
                adressInfo = true;
                saveAdress();
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
            submitHandler: function(form) {
                generataPaymentToken();
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
            id_apartment = $(this).attr('id').split('_')[1];
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
            $('#sa-payment-form > .address-info').removeClass('hidden');
            saAddValidationRules();
        }
        else{
            $('#sa-payment-form > .address-info').addClass('hidden');
            saRemoveValidationRules();
        }
    });

    /*
     * Function to save the primary address
     */
    function saveAdress(){
        $('#sa-address .alert-success').removeClass('hidden').children('span').text(addressSuccess);
        // $.ajax({
        //     url: '/api/address/create',
        //     type: 'GET',
        //     data: $('#sa-address').serialize()+'&api_token='+localStorage.getItem('api_token')+'&id_user='+localStorage.getItem('id_user'),
        //     success: function(reply){
        //         console.log(reply);
        //     }
        // });
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
            expMonth: $('select[name="month"]').val(),
            expYear: $('select[name="year"]').val()
        };

        TCO.requestToken(function(response) {
            //console.log('GOOD', response);
            savePayment(response.response.token.token);
        },function(error) {
            console.log('ERROR', error);
        },args);
    }

    /*
     * Do the payment
     */
    function savePayment(paymentToken){
        var currency = $.parseJSON(localStorage.getItem("currency"));
        //console.log('Calling method to save the payment');
        $.ajax({
            url: '/api/booking',
            type: 'POST',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token'),
                id_apartment: id_apartment,
                checkin: localStorage.getItem('checkin'),
                checkout: localStorage.getItem('checkout'),
                tco_token: paymentToken,
                currency_iso: currency.iso_code,
                name: '',
                id_currency: currency.id_currency,
                id_address_booking: 1,
                id_address_payment: 1
            }
        });
    }

});
