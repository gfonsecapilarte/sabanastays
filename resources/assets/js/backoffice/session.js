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
