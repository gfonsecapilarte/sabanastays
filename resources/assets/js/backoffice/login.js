let validate = require('jquery-validation');

/**
 * Modules to show error and success messages
 */
import {
    errorMessage,
    successMessage
} from "../messages/messages.js";


$(document).ready(function() {

    /*
     * Validate form
     */
    if($('#loginform').length){
        $('#loginform').validate({
            submitHandler: function(form) {
                login();
            }
        });
    }

    /*
     * Function to login
     */
    function login(){
        $('#loader').show();
        $.ajax({
            url: '/api/admin/login',
            type: 'POST',
            data: $('#loginform').serialize(),
            success: function(reply){
                $('#loader').hide();
                if(reply.success != null && reply.success == false){
                    errorMessage($('#loginform'),reply.message);
                }
                else{
                    localStorage.setItem('api_token',reply.api_token);
                    localStorage.setItem('id_user',reply.id_user);
                    localStorage.setItem('user_name',reply.firstname+' '+reply.lastname);
                    location.href = dashboardlink;
                }
            }
        });
    }

});
