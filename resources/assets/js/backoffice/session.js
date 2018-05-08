$(document).ready(function(){
    var id_user   = localStorage.getItem('id_user');
    var api_token = localStorage.getItem('api_token');

    if(id_user != null && api_token != null){
        $.ajax({
            url: '/api/admin/session/check',
            type: 'GET',
            data: {
                id_user: id_user,
                api_token: api_token
            },
            success: function(reply){
                if(!reply.success){
                    location.href = loginLink;
                }
            }
        });
    }
    else{
        location.href = loginLink;
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
                    location.href = loginLink;
                }
            }
        });
    });
});
