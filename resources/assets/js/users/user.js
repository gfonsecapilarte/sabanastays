/**
 * Modules to show error and success messages
 */
import {
    errorMessage,
    successMessage
} from "../messages/messages.js";

$(document).ready(function() {
    if($('#user-detail-form').length){

        /*
         * Datepicker for birthdate field
         */
        $('input[name="birthdate"]').datepicker({
            autoClose: true,
            format: 'yyyy-mm-dd'
        });

        /*
         * Get user details
         */
        $('#loader').show();
        $.ajax({
            url: '/api/user/',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token')
            },
            success: function(reply){
                $('#loader').hide();
                $('.mg-sec-left-title').text(reply.firstname+' '+reply.lastname);
                $('input[name="firstname"]').val(reply.firstname);
                $('input[name="lastname"]').val(reply.lastname);
                $('input[name="birthdate"]').val(reply.birthdate);
                $('select[name="gender"]').val(reply.gender);
                $('input[name="email"]').val(reply.email);
            }
        });

        /*
         * Validate form to update users
         */
        $('#user-detail-form').validate({
            submitHandler: function(form){
                updateUser(form);
            }
        });

        /*
         * Function to update users
         */
        function updateUser(form){
            $('#loader').show();
            $.ajax({
                url: '/api/user/',
                type: 'PUT',
                data: {
                    id_user: localStorage.getItem('id_user'),
                    api_token: localStorage.getItem('api_token'),
                    firstname: $('input[name="firstname"]').val(),
                    lastname: $('input[name="lastname"]').val(),
                    birthdate: $('input[name="birthdate"]').val(),
                    gender: $('select[name="gender"]').val(),
                    email: $('input[name="email"]').val(),
                },
                success: function(reply){
                    $('#loader').hide();
                    if(reply.success != null && reply.success == false){
                        errorMessage($('#user-detail-form'),reply.message);
                    }
                    else{
                        successMessage($('#user-detail-form'),'Updated');
                    }
                }
            });
        }
    }

    if(localStorage.getItem('api_token')){
        $('#login-menu-item').hide();
        $('#user-menu-item').removeClass('hidden');
    }

    /*
     * logout
     */
    $('#logout').click(function(e){
        e.preventDefault();
        $('#loader').show();
        $.ajax({
            url: '/api/logout/',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token')
            },
            success: function(reply){
                $('#loader').hide();
                if(reply.success != null && reply.success == true){
                    localStorage.removeItem('id_user');
                    localStorage.removeItem('api_token');
                    localStorage.removeItem('user_name');
                    location.href = mainUrl;
                }
            }
        });
    });

});
