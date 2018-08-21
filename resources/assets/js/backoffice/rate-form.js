var RateForm = {
    init: function() {

        // console.log('Im here rates');
        if (typeof $('#container-form-rate')[0] === typeof undefined) {
            return;
        }

        RateForm.clear();
        RateForm.createEvents();
    },    
    createEvents: function() {
        $('.save-rate').on('click', RateForm.onSaveRate);
    },
    clear: function() {
        // $('#lst-rate').val($('#lst-rate option[selected]').val(""));
    },
    getInformation() {
        return {
            name: $('.form-information').find('.txt-name').val(),
            nights: $('#lst-rate').val(),
            variant: $('.form-information').find('.txt-discount').val()
        };
    },   
    onSaveRate: function(event) {

        var valid = true;

        $('#container-form-rate').each(function(i, form) {
            $(form).find('input[required],select[required]').each(function(i, input) {
                //console.log($(input),$(input).val());
                $(input).removeClass('input-required');
                if ($(input).val() === '' || $(input).val() == '-1' || !$(input).val()) {
                    valid = false;
                    $(input).addClass('input-required');
                }
            });
        });

        if (!valid) {
            alert('Algunos campos obligatorios estan vacios.');
            return;
        }

        $('.save-rate').prop('disabled', true);
        var data = {
            id_rate: $('#txt-id_rate').val(),
            information: RateForm.getInformation()
        };

        RateForm.saveRate(data);
    },
    saveRate(data) {


        var list_rates = $('#container-form-rate').data("link");

        var form_data = new FormData();
        form_data.append('id_rate', data.id_rate);
        form_data.append('information', JSON.stringify(data.information));
        

        // console.log('===== Im here save rate ========');
        // console.log(data.information);
        // console.log('=============');
        // return;

        $.ajax({
            url: '/api/rate/save',
            type: 'POST',
            data: form_data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    $('#txt-id_rate').val(response.id_rate);
                    $.growl.notice({ title: "Success", message: "Rate has saved successful" });

                    var timer = setTimeout(function(){ 
                        window.location.href = list_rates;
                        clearTimeout(timer);
                        timer = null;
                    }, 900);                    
                } else {
                    $.growl.error({ title: "Error", message: "An error while try save the rate" });
                }
            }
        });
    }
};

$(function() {
    RateForm.init();
});