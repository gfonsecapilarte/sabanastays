import { saBookingStepOne, saBookingStepTwo, saBookingStepThree, saBookingStepFour, saNextStep } from "./tabs.js";
import { saAddValidationRules, saRemoveValidationRules } from "./validations.js";

let validate = require('jquery-validation');

$(document).ready(function() {
    var aptoSelected = false,
        personalInfo = false,
        paymentDone  = false;

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
                saBookingStepThree();
                $('a',this).tab('show');
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
            if(localStorage.getItem('api_token') == null){
                aptoSelected = true;
                saNextStep($(this));
            }
            else{
                aptoSelected = true;
                saNextStep($('a[href="#payment"]'));
            }
        }
        else if($(this).attr('href') == '#payment'){
            if(localStorage.getItem('api_token') != null){
                saNextStep($(this));
            }
            else{
                alert("Debe diligenciar la información personal")
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
     * Function to do the payment
     */
    function payBooking(){
        
    }

});
