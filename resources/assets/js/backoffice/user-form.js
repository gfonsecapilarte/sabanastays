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
            role: $('.form-information').find('.lst-role').val(),
            email: $('.form-information').find('.txt-email').val(),
            password: $('.form-information').find('.txt-password').val()
        };
    },
    onSaveUser: function(event) {

        var valid = true;

        $('.form-information').each(function(i, form) {
            $(form).find('input[required],select[required]').each(function(i, input) {
                console.log($(input),$(input).val());
                $(input).removeClass('input-required');
                if ($(input).val() === '' || $(input).val() == '-1' || $(input).val() == '0') {
                    valid = false;
                    $(input).addClass('input-required');
                }
            });
        });

        if (!valid) {
            alert('Algunos campos obligatorios estan vacios.');
            return;
        }

        $('.save-user').prop('disabled', true);
        var data = {
            id_user: $('#txt-id_user').val(),
            information: UserForm.getInformation()
        };
        UserForm.saveUser(data);
    },
    saveUser(data) {

        var list_users = $('#container-form-user').data("link");
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
                    var timer = setTimeout(function(){ 
                        window.location.href = list_users;
                        clearTimeout(timer);
                        timer = null;
                    }, 900); 
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