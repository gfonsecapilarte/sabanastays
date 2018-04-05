let validate = require('jquery-validation');

$(document).ready(function() {

    /** Validate form **/
    if($('#sa-login').length){
        $('#sa-login').validate({
            submitHandler: function(form) {
                login();
            }
        });
    }

    /** Function to login **/
    function login(){
        $.ajax({
            url: '/api/user/login',
            type: 'POST',
            data: $('#sa-login').serialize(),
            success: function(reply){
                if(!reply.success && reply.success != null){
                    $('#sa-login .alert-danger').removeClass('hidden').children('span').text(reply.message);
                }
                else{
                    $('#sa-login .alert-danger').addClass('hidden');
                    $('#sa-login input[type="email"], #sa-login input[type="password"]').val('');
                    localStorage.setItem('api_token',reply.api_token);
                    localStorage.setItem('id_user',reply.id_user);
                    location.href = profile_link;
                }
            }
        });
    }
});
