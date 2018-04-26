var Web = {
    dz: [],
    init: function() {
        if (typeof $('#container-web')[0] === typeof undefined) {
            return;
        }
//        Web.Header.init();
        Web.Home.init();
//        Web.initDropzone('header_background');
////        Web.initDropzone('home_media');
//        $('.about_media').each(function(i, elem) {
//            Web.initDropzone($(elem).data('id'));
//        });
//        $('.testimonial_media').each(function(i, elem) {
//            Web.initDropzone($(elem).data('id'));
//        });
    },
    initDropzone: function(form) {
        window.Dropzone.autoDiscover = false;
        window.Dropzone.autoProcessQueue = false;
//        Web.dZone = new window.Dropzone("#form-"+form,{
        Web.dz[form] = new window.Dropzone("#form-"+form,{
            addRemoveLinks: true,
            autoProcessQueue:false,
            url: "/api/uploads",
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size hidden\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        });

//        if (typeof window.apartment_media !== typeof undefined) {
//            $.each(window.apartment_media, function(i, file) {
//                var mockFile = { name: file.path.replace('/storage/', ''), id_media: file.id_media};
//                ApartmentForm.dZone.options.addedfile.call(ApartmentForm.dZone, mockFile);
//                ApartmentForm.dZone.options.thumbnail.call(ApartmentForm.dZone, mockFile, file.path);
//            });
//        }
//
//        ApartmentForm.dZone.on("removedfile", function(file) {
//            console.log('remove:', file);
//            ApartmentForm.removeMedia.push({id_media: file.id_media});
//        });

    },
    Header: {
        form: 'home_media',
        init: function() {
            Web.Header.initDropzone();
        },
        initDropzone: function() {
            Web.initDropzone('header_logo');
        }
    },
    Home: {
        form: 'home_media',
        init: function() {
            Web.Home.initDropzone();
            Web.Home.createEvents();
        },
        initDropzone: function() {
            Web.initDropzone(Web.Home.form);
        },
        createEvents: function() {
            $('.save-home-module').on('click', Web.Home.onSave);
        },
        onSave: function(event) {
            var information = [];
            $('#row-home-module .form-information').each(function(i, form) {
                var id_language = $(form).data('id_language');
                information[id_language] = {
                    title: $(form).find('.txt-name').val(),
                    description: $(form).find('.txt-description').val(),
                };
            });

            var data = {
                id_home_module: $('#row-home-module').data('id-home-module'),
                information: information,
                media: Web.dz[Web.Home.form].getAcceptedFiles()
            };
            Web.Home.saveHomeModule(data);
        },
        saveHomeModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_home_module', data.id_home_module);
            form_data.append('information', JSON.stringify(data.information));
            $.each(data.media, function(i, media) {
                if (typeof media.dataURL !== typeof undefined) {
                    form_data.append('media[]', media);
                }
            });

            console.log('data', data, form_data);

            $.ajax({
                url: '/api/module/home/save',
                type: 'POST',
                data: form_data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.success) {
                        $('#row-home-module').data('id-home-module', response.id_home_module);
                    }
                }
            });
        }
    }
};

$(function() {
    Web.init();
});