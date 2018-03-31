let validate = require('jquery-validation');

$(document).ready(function() {

    /** Validate forms **/
    if($('#sa-login').length > 0){
        $('#sa-login').validate({
            submitHandler: function(form) {
                alert('Login...')
            }
        });

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
                alert('Registering...')
            }
        });
    }
});
