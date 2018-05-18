let validate = require('jquery-validation');
import FBSDK from 'fb-sdk';

/**
 * Modules to show error and success messages
 */
import {
    errorMessage,
    successMessage
} from "../messages/messages.js";


/** Setup Facebook **/
const Facebook = FBSDK({
    appId: faceboo_app_id,
    status: true,
    version: 'v2.8'
});

$(document).ready(function() {

    /*
     * Validate form
     */
    if($('#sa-login').length){
        $('#sa-login').validate({
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
            url: '/api/user/login',
            type: 'POST',
            data: $('#sa-login').serialize(),
            success: function(reply){
                $('#loader').hide();
                if(reply.success != null && reply.success == false){
                    errorMessage($('#sa-login'),reply.message);
                }
                else{
                    localStorage.setItem('api_token',reply.api_token);
                    localStorage.setItem('id_user',reply.id_user);
                    localStorage.setItem('user_name',reply.firstname+' '+reply.lastname);
                    location.href = myBookingsLink;
                }
            }
        });
    }

    /*
     * Login with facebook
     */
    $('#btn-facebook-login-l, #btn-facebook-login-r').click(function(event){
        event.preventDefault();
        var data = {};
        Facebook.login(function(response) {
            $('#loader').show();
            if(response.status == 'connected'){
                data.fb_exchange_token = response.authResponse.accessToken;
                Facebook.api('/me?fields=name,email', function(response) {
                    data.name   = response.name;
                    data.email  = response.email;
                    $.ajax({
                        url: '/api/user/facebook/login',
                        type: 'POST',
                        data: data,
                        success: function(reply){
                            $('#loader').hide();
                            if(reply.success != null && reply.success == false){
                                errorMessage($('#sa-login'),reply.message);
                            }
                            else{
                                localStorage.setItem('api_token',reply.api_token);
                                localStorage.setItem('id_user',reply.id_user);
                                localStorage.setItem('user_name',reply.firstname+' '+reply.lastname);
                                location.href = myBookingsLink;
                            }
                        }
                    });
                });
            }
        }, {scope: 'public_profile,email'});
    });

    /*
     * Setup and login with Google API
     */
    if($('#sa-login').length){
        require( 'google-client-api' )().then( function( gapi ) {
        var auth2 = null;
        gapi.load('auth2', function(){
            auth2 = gapi.auth2.init({
                client_id: googleClientId,
                cookiepolicy: 'single_host_origin',
            });
            attachSignin(document.getElementById('btn-google-login-l'));
            attachSignin(document.getElementById('btn-google-login-r'));
        });

        function attachSignin(element) {
            auth2.attachClickHandler(element,{},function(googleUser){
                $('#loader').show();
                $.ajax({
                    url: '/api/user/google/login',
                    type: 'POST',
                    data: {
                        token:googleUser.getAuthResponse().id_token
                    },
                    success: function(reply){
                        $('#loader').hide();
                        if(reply.success != null && reply.success == false){
                            errorMessage($('#sa-login'),reply.message);
                        }
                        else{
                            localStorage.setItem('api_token',reply.api_token);
                            localStorage.setItem('id_user',reply.id_user);
                            localStorage.setItem('user_name',reply.firstname+' '+reply.lastname);
                            location.href = myBookingsLink;
                        }
                    }
                });
            },
            function(error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
        }
    });
    }
});
