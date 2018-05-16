var BuildingForm = {
    init: function() {
        if (typeof $('#container-form-building')[0] === typeof undefined) {
            return;
        }
        BuildingForm.clear();
        BuildingForm.createEvents();
    },
    createEvents: function() {
        $('.save-building').on('click', BuildingForm.onSaveBuilding);
    },
    clear: function() {
        $('#lst-city').val($('#lst-city option[selected]').val());
    },
    getInformation() {
        var information = [];
        $('#container-form-building .form-information').each(function(i, form) {
            var id_language = $(form).data('id_language');
            information[id_language] = {
                name: $(form).find('.txt-name').val(),
                description: $(form).find('.txt-description').val(),
            };
        });
        return information;
    },
    getSettings: function() {
        return {
            id_city: $('#lst-city').val(),
            address: $('#txt-address').val(),
            postal_code: $('#txt-postal_code').val(),
            lat: $('#txt-lat').val(),
            lng: $('#txt-lng').val()
        };
    },
    onSaveBuilding: function(event) {
        $('.save-building').prop('disabled', true);
        var data = {
            id_building: $('#txt-id_building').val(),
            information: BuildingForm.getInformation(),
            settings: BuildingForm.getSettings()
        };
        BuildingForm.saveBuilding(data);
    },
    saveBuilding(data) {
        var form_data = new FormData();
        form_data.append('id_building', data.id_building);
        form_data.append('information', JSON.stringify(data.information));
        form_data.append('settings', JSON.stringify(data.settings));

        $.ajax({
            url: '/api/building/save',
            type: 'POST',
            data: form_data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    $('#txt-id_building').val(response.id_building);
                    $.growl.notice({ title: "Success", message: "Building has saved successful" });
                } else {
                    $.growl.error({ title: "Error", message: "An error while try save the building" });
                }
            }
        });
    }
};

$(function() {
    BuildingForm.init();
});