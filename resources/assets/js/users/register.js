let validate = require('jquery-validation');

/**
 * Modules to show error and success messages
 */
import {
    errorMessage,
    successMessage
} from "../messages/messages.js";

$(document).ready(function() {
    /** Validate form **/
    if($('#sa-register').length){
        $('#sa-register').validate({
            rules : {
                password : {
                    minlength : 5
                },
                password_confirm : {
                    minlength : 5,
                    equalTo : "#password"
                }
            },
            submitHandler: function(form) {
                register();
            }
        });

        $('input[name="birthdate"]').datepicker({
    		autoclose: true,
    		format: "yyyy-mm-dd"
    	});
    }

    /** Function to register **/
    function register(){
        $.ajax({
            url: '/api/user',
            type: 'POST',
            data: $('#sa-register').serialize(),
            success: function(reply){
                if(reply.success != null && reply.success == false){
                    errorMessage($('#sa-login'),reply.message);
                }
                else{
                    localStorage.setItem('api_token',reply.api_token);
                    localStorage.setItem('id_user',reply.id_user);
                    location.href = profile_link;
                }
            }
        });
    }
});
