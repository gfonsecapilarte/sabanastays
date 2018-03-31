let validate = require('jquery-validation');

$(document).ready(function() {

    /** Validate forms **/
    if($('#sa-contact-form').length > 0){
        $('#sa-contact-form').validate({
            submitHandler: function(form) {
                alert('Sending...')
            }
        });
    }
});
