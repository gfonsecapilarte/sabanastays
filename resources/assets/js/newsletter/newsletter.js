let validate = require('jquery-validation');

/**
 * Modules to show error and success messages
 */
import {
    errorMessage,
    successMessage
} from "../messages/messages.js";


$(document).ready(function() {

    /** Validate forms **/
    if($('#sa-newsletter-form').length > 0){
        $('#sa-newsletter-form').validate({
            submitHandler: function(form) {
                sendMessage();
            }
        });
    }

    function sendMessage(){
        $('#loader').show();
        $.ajax({
            url: '/api/newsletter/',
            type: 'GET',
            data: $('#sa-newsletter-form').serialize(),
            success: function(reply){
                $('#loader').hide();
                if(reply.success == true){
                    successMessage($('#sa-newsletter-form'),reply.message);
                }
                else{
                    errorMessage($('#sa-newsletter-form'),reply.message);
                }
            }
        });
    }
});
