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
    if($('#sa-contact-form').length > 0){
        $('#sa-contact-form').validate({
            submitHandler: function(form) {
                sendMessage();
            }
        });
    }

    function sendMessage(){
        $('#loader').show();
        $.ajax({
            url: '/api/contactus/',
            type: 'GET',
            data: $('#sa-contact-form').serialize(),
            success: function(reply){
                $('#loader').hide();
                if(reply.success == true){
                    successMessage($('#sa-contact-form'),reply.message);
                }
            }
        });
    }
});
