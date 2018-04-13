import { saBookingStepOne, saBookingStepTwo, saBookingStepThree, saBookingStepFour, saNextStep } from "./tabs.js";
import { saAddValidationRules, saRemoveValidationRules } from "./validations.js";
//import TCO from "../2co.min.js"

let validate = require('jquery-validation');

$(document).ready(function() {
    var aptoSelected = false,
        adressInfo   = false,
        paymentDone  = false;

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
                payBooking();
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
        //     data: $('#sa-address').serialize(),
        //     success: function(reply){
        //         console.log(reply);
        //     }
        // });
    }

    /*
     * Generate token in 2checkout
     */
    function payBooking(){
        var args = {
            sellerId: '901376526',
            publishableKey: '90B1A5E1-6C0C-40CA-AEF0-86CC82E74CFB',
            ccNo: '4000000000000002',
            cvv: '123',
            expMonth: '05',
            expYear: '2020'
        };

        //TCO.loadPubKey('sandbox');
        //
        // TCO.requestToken(function(response) {
        //     //console.log('GOOD', response);
        //     console.log(response.response.token.token);
        // },function(error) {
        //     console.log('ERROR', error);
        // },args);
    }

});
