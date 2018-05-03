let validate = require('jquery-validation');

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
        $.ajax({
            url: '/api/admin/login',
            type: 'POST',
            data: $('#loginform').serialize(),
            success: function(reply){
                if(reply.success != null && reply.success == false){
                    alert(reply.message);
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
