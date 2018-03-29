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
            submitHandler: function(form) {
                alert('Registering...')
            }
        });
    }
});
