let validate = require('jquery-validation');

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
            type: 'POST',
            data: $('#sa-contact-form').serialize(),
            success: function(reply){
                $('#loader').hide();
            }
        });
    }
});
