let validate = require('jquery-validation');
import FBSDK from 'fb-sdk';

/** Setup and login with Google API **/
require( 'google-client-api' )().then( function( gapi ) {
    var auth2 = null;
    gapi.load('auth2', function(){
        auth2 = gapi.auth2.init({
            client_id: '89349671547-up4d307mi1qthqne01llcetm80v85hd0.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('btn-google-login'));
    });

    function attachSignin(element) {
        auth2.attachClickHandler(element,{},function(googleUser){
                console.log(googleUser.getBasicProfile().getName());
                console.log(googleUser.getBasicProfile().getEmail());
                console.log(googleUser.getBasicProfile().getId());
        },
        function(error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    }
});

/** Setup Facebook **/
const Facebook = FBSDK({
    appId: '155464328481769',
    status: true,
    version: 'v2.7'
});

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

    /** Login with facebook **/
    $('#btn-facebook-login').click(function(event){
        Facebook.login(function(response) {
            console.log(response);
            Facebook.api('/me?fields=name,email', function(response) {
                console.log(response);
            });
        }, {scope: 'public_profile,email'});
    });
});
