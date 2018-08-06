var ApartmentForm = {
    dZone: null,
    removeMedia: [],
    init: function() {
        if (typeof $('#container-form-apartment')[0] === typeof undefined) {
            return;
        }
        ApartmentForm.initDropzone();
        ApartmentForm.clear();
        ApartmentForm.createEvents();
    },
    initDropzone: function() {
        window.Dropzone.autoDiscover = false;
        window.Dropzone.autoProcessQueue = false;
        ApartmentForm.dZone = new window.Dropzone("#form_dropzone",{
            addRemoveLinks: true,
            autoProcessQueue:false,
            url: "/api/uploads",
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size hidden\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        });

        if (typeof window.apartment_media !== typeof undefined) {
            $.each(window.apartment_media, function(i, file) {
                var mockFile = { name: file.path.replace('/storage/', ''), id_media: file.id_media};
                ApartmentForm.dZone.options.addedfile.call(ApartmentForm.dZone, mockFile);
                ApartmentForm.dZone.options.thumbnail.call(ApartmentForm.dZone, mockFile, file.path);
            });
        }

        ApartmentForm.dZone.on("removedfile", function(file) {
            console.log('remove:', file);
            ApartmentForm.removeMedia.push({id_media: file.id_media});
        });

    },
    createEvents: function() {
        $('.save-apartment').on('click', ApartmentForm.onSaveApartment);
    },
    clear: function() {
        $('#lst-rate').val($('#lst-rate option[selected]').val());
        $('#lst-apartment_type').val($('#lst-apartment_type option[selected]').val());
        $('#lst-building').val($('#lst-building option[selected]').val());
    },
    getInformation() {
        var information = [];
        $('#container-form-apartment .form-information').each(function(i, form) {
            var id_language = $(form).data('id_language');
            information[id_language] = {
                name: $(form).find('.txt-name').val(),
                short_description: $(form).find('.txt-short_description').val(),
                description: $(form).find('.txt-description').val(),
            };
        });
        return information;
    },
    getFeatures: function() {
        return {
            guests: $('.txt-feature-guests').val(),
            bedrooms: $('.txt-feature-bedrooms').val(),
            queen_beds: $('.txt-feature-queen_beds').val(),
            baths: $('.txt-feature-baths').val(),
            king_beds: $('.txt-feature-king_beds').val(),
            full_beds: $('.txt-feature-full_beds').val(),
            twin_beds: $('.txt-feature-twin_beds').val()
        };
    },
    getAmenities: function() {
        var amenities = [];
        $('.list-amenities input:checkbox').each(function(i, input) {
            amenities.push({id_amenity:$(input).val(),checked:$(input).is(':checked')});
        });
        return amenities;
    },
    getSettings: function() {
        return {
            id_building: $('#lst-building').val(),
            id_apartment_type: $('#lst-apartment_type').val(),
            rate: $('#lst-rate').val(),
            floor: $('#txt-floor').val(),
            number: $('#txt-number').val()
        };
    },
    getPricing: function() {
        var pricing = [];
        $('#container-form-apartment .form-pricing').each(function(i, form) {
            var currency = $(form).data('id_currency');
            pricing[currency] = {
                value: $(form).find('.txt-price').val()
            };
        });
        return pricing;
    },
    getMedia: function() {
        return ApartmentForm.dZone.getAcceptedFiles();
    },
    getRate: function() {
        return $('#lst-rate').val();
    },
    onSaveApartment: function(event) {

        var valid = true;

        $('#container-form-apartment').each(function(i, form) {
            $(form).find('input[required],select[required]').each(function(i, input) {
                console.log($(input),$(input).val());
                $(input).removeClass('input-required');
                if ($(input).val() === '' || $(input).val() == '-1' || $(input).val() == '0' || !$(input).val()) {
                    valid = false;
                    $(input).addClass('input-required');
                }
            });
        });

        if (!valid) {
            alert('Algunos campos obligatorios estan vacios.');
            return;
        }

        $('.save-apartment').prop('disabled', true);
        var data = {
            id_apartment: $('#txt-id_apartment').val(),
            information: ApartmentForm.getInformation(),
            features: ApartmentForm.getFeatures(),
            amenities: ApartmentForm.getAmenities(),
            settings: ApartmentForm.getSettings(),
            pricing: ApartmentForm.getPricing(),
            rate: ApartmentForm.getRate(),
            media: ApartmentForm.getMedia(),
            remove_media: ApartmentForm.removeMedia
        };

       

        ApartmentForm.saveApartment(data);
    },
    saveApartment(data) {
        var form_data = new FormData();
        form_data.append('id_apartment', data.id_apartment);
        form_data.append('information', JSON.stringify(data.information));
        form_data.append('features', JSON.stringify(data.features));
        form_data.append('amenities', JSON.stringify(data.amenities));
        form_data.append('settings', JSON.stringify(data.settings));
        form_data.append('rate', JSON.stringify(data.rate));
        form_data.append('pricing', JSON.stringify(data.pricing));
        form_data.append('remove_media', JSON.stringify(data.remove_media));
        $.each(data.media, function(i, media) {
            if (typeof media.dataURL !== typeof undefined) {
                form_data.append('media[]', media);
            }
        });

        $.ajax({
            url: '/api/apartment/save',
            type: 'POST',
            data: form_data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    $('#txt-id_apartment').val(response.id_apartment);
                    $.growl.notice({ title: "Success", message: "Apartment has saved successful" });
                } else {
                    $.growl.error({ title: "Error", message: "An error while try save the apartment" });
                }
            }
        });
    }
};

$(function() {
    ApartmentForm.init();
});