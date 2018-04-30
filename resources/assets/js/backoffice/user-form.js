var UserForm = {
    init: function() {
        if (typeof $('#container-form-user')[0] === typeof undefined) {
            return;
        }
        UserForm.createEvents();
    },
    createEvents: function() {
        $('.save-user').on('click', UserForm.onSaveUser);
    },
    getInformation() {
        return {
            firstname: $('.form-information').find('.txt-firstname').val(),
            lastname: $('.form-information').find('.txt-lastname').val(),
            phone: $('.form-information').find('.txt-phone').val(),
            birthdate: $('.form-information').find('.txt-birthdate').val(),
            gender: $('.form-information').find('.lst-gender').val(),
            role: $('.form-information').find('.lst-role').val()
        };
    },
    onSaveUser: function(event) {
        $('.save-user').prop('disabled', true);
        var data = {
            id_user: $('#txt-id_user').val(),
            information: UserForm.getInformation()
        };
        UserForm.saveUser(data);
    },
    saveUser(data) {
        var form_data = new FormData();
        form_data.append('id_user', data.id_user);
        form_data.append('information', JSON.stringify(data.information));

        $.ajax({
            url: '/api/user/save',
            type: 'POST',
            data: form_data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    $('#txt-id_user').val(response.id_user);
                    $.growl.notice({ title: "Success", message: "User has saved successful" });
                } else {
                    $.growl.error({ title: "Error", message: "An error while try save the user" });
                }
            }
        });
    }
};

$(function() {
    UserForm.init();
});