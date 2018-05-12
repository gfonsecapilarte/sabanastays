var Web = {
    dz: [],
    init: function() {
        if (typeof $('#container-web')[0] === typeof undefined) {
            return;
        }
        Web.Header.init();
        Web.Home.init();
        Web.HomeAbout.init();
        Web.Contact.init();
        Web.About.init();
        Web.Testimonial.init();
    },
    initDropzone: function(form) {
        window.Dropzone.autoDiscover = false;
        window.Dropzone.autoProcessQueue = false;
        Web.dz[form] = new window.Dropzone("#form-"+form,{
            addRemoveLinks: true,
            autoProcessQueue:false,
            url: "/api/uploads",
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail style=\"height:100%;width:100%;\" /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size hidden\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        });
    },
    Header: {
        form_logo: 'header_logo',
        form_background: 'header_background',
        remove_media: [],
        init: function() {
            Web.Header.initDropzone();
            Web.Header.createEvents();
        },
        initDropzone: function() {
            Web.initDropzone(Web.Header.form_logo);
            Web.initDropzone(Web.Header.form_background);
            //existing
            $('#row-header-module .remove_media input.media-header_module').each(function(i, media) {
                var mockFile = { name: $(media).data('path').replace('/storage/', ''), id_media: $(media).data('id_media')};
                Web.dz[$(media).data('form')].options.addedfile.call(Web.dz[$(media).data('form')], mockFile);
                Web.dz[$(media).data('form')].options.thumbnail.call(Web.dz[$(media).data('form')], mockFile, $(media).data('path'));
                //event
                Web.dz[$(media).data('form')].on("removedfile", function(file) {
                    Web.Header.remove_media.push({id_media: file.id_media});
                });
            });
        },
        createEvents: function() {
            $('.save-header-module').on('click', Web.Header.onSave);
        },
        onSave: function(event) {
            var data = {
                id_header_module: $('#row-header-module').data('id-header-module'),
                media_logo: Web.dz[Web.Header.form_logo].getAcceptedFiles(),
                media_background: Web.dz[Web.Header.form_background].getAcceptedFiles(),
                remove_media: Web.Header.remove_media
            };
            Web.Header.saveModule(data);
        },
        saveModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_header_module', data.id_header_module);
            form_data.append('remove_media', JSON.stringify(data.remove_media));
            $.each(data.media_logo, function(i, media) {
                if (typeof media.dataURL !== typeof undefined) {
                    form_data.append('media_logo[]', media);
                }
            });
            $.each(data.media_background, function(i, media) {
                if (typeof media.dataURL !== typeof undefined) {
                    form_data.append('media_background[]', media);
                }
            });

            $.ajax({
                url: '/api/module/header/save',
                type: 'POST',
                data: form_data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.success) {
                        Web.Header.remove_media = [];
                        $('#row-header-module').data('id-header-module', response.id_header_module);
                        $.growl.notice({ title: "Success", message: "Header module has saved successful" });
                    } else {
                        $.growl.error({ title: "Error", message: "An error while try save the module" });
                    }
                }
            });
        }
    },
    Home: {
        form: 'home_media',
        remove_media: [],
        init: function() {
            Web.Home.initDropzone();
            Web.Home.createEvents();
        },
        initDropzone: function() {
            Web.initDropzone(Web.Home.form);
            //existing
            $('#row-home-module .remove_media input.media-home_module').each(function(i, media) {
                var mockFile = { name: $(media).data('path').replace('/storage/', ''), id_media: $(media).data('id_media')};
                Web.dz[Web.Home.form].options.addedfile.call(Web.dz[Web.Home.form], mockFile);
                Web.dz[Web.Home.form].options.thumbnail.call(Web.dz[Web.Home.form], mockFile, $(media).data('path'));
            });

            Web.dz[Web.Home.form].on("removedfile", function(file) {
                Web.Home.remove_media.push({id_media: file.id_media});
            });
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
                media: Web.dz[Web.Home.form].getAcceptedFiles(),
                remove_media: Web.Home.remove_media
            };
            Web.Home.saveModule(data);
        },
        saveModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_home_module', data.id_home_module);
            form_data.append('information', JSON.stringify(data.information));
            form_data.append('remove_media', JSON.stringify(data.remove_media));
            $.each(data.media, function(i, media) {
                if (typeof media.dataURL !== typeof undefined) {
                    form_data.append('media[]', media);
                }
            });

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
                        Web.Home.remove_media = [];
                        $('#row-home-module').data('id-home-module', response.id_home_module);
                        $.growl.notice({ title: "Success", message: "Home module has saved successful" });
                    } else {
                        $.growl.error({ title: "Error", message: "An error while try save the module" });
                    }
                }
            });
        }
    },
    HomeAbout: {
        init: function() {
            Web.HomeAbout.createEvents();
        },
        createEvents: function() {
            $('.save-home_about-module').on('click', Web.HomeAbout.onSave);
        },
        onSave: function(event) {
            var information = [];
            $('#row-home_about-module .form-information').each(function(i, form) {
                var id_language = $(form).data('id_language');
                information[id_language] = {
                    title: $(form).find('.txt-name').val(),
                    description: $(form).find('.txt-description').val(),
                    video_url: $(form).find('.txt-video_url').val()
                };
            });

            var data = {
                id_home_about_module: $('#row-home_about-module').data('id-home_about-module'),
                information: information
            };
            Web.HomeAbout.saveModule(data);
        },
        saveModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_home_about_module', data.id_home_about_module);
            form_data.append('information', JSON.stringify(data.information));

            $.ajax({
                url: '/api/module/home/about/save',
                type: 'POST',
                data: form_data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.success) {
                        $('#row-home_about-module').data('id-home_about-module', response.id_home_about_module);
                        $.growl.notice({ title: "Success", message: "Home About module has saved successful" });
                    } else {
                        $.growl.error({ title: "Error", message: "An error while try save the module" });
                    }
                }
            });
        }
    },
    Contact: {
        init: function() {
            Web.Contact.createEvents();
        },
        createEvents: function() {
            $('.save-contact-module').on('click', Web.Contact.onSave);
        },
        onSave: function(event) {
            var information = [];
            $('#row-contact-module .form-information').each(function(i, form) {
                var id_language = $(form).data('id_language');
                information[id_language] = {
                    title: $(form).find('.txt-title').val(),
                    description: $(form).find('.txt-description').val(),
                    address: $(form).find('.txt-address').val(),
                    phone: $(form).find('.txt-phone').val(),
                    email: $(form).find('.txt-email').val(),
                };
            });

            var data = {
                id_contact_module: $('#row-contact-module').data('id-contact-module'),
                information: information,
                lat: $('#row-contact-module .form-location .txt-lat').val(),
                lng: $('#row-contact-module .form-location .txt-lng').val()
            };
            Web.Contact.saveModule(data);
        },
        saveModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_contact_module', data.id_contact_module);
            form_data.append('information', JSON.stringify(data.information));
            form_data.append('lat', JSON.stringify(data.lat));
            form_data.append('lng', JSON.stringify(data.lng));

            $.ajax({
                url: '/api/module/contact/save',
                type: 'POST',
                data: form_data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.success) {
                        $('#row-contact-module').data('id-contact-module', response.id_contact_module);
                        $.growl.notice({ title: "Success", message: "Contact module has saved successful" });
                    } else {
                        $.growl.error({ title: "Error", message: "An error while try save the module" });
                    }
                }
            });
        }
    },
    About: {
        form: 'about_media',
        remove_media: [],
        init: function() {
            Web.About.initDropzone();
            Web.About.createEvents();
        },
        initDropzone: function() {
            $('#row-about-module .about_media').each(function(i, item) {
                Web.initDropzone(Web.About.form+'_'+$(item).data('id_lang'));
                //existing
                $('#row-about-module .remove_media input.media-about_module_'+$(item).data('id_lang')).each(function(i, media) {
                    var mockFile = { name: $(media).data('path').replace('/storage/', ''), id_media: $(media).data('id_media')};
                    Web.dz[Web.About.form+'_'+$(item).data('id_lang')].options.addedfile.call(Web.dz[Web.About.form+'_'+$(item).data('id_lang')], mockFile);
                    Web.dz[Web.About.form+'_'+$(item).data('id_lang')].options.thumbnail.call(Web.dz[Web.About.form+'_'+$(item).data('id_lang')], mockFile, $(media).data('path'));
                });

                Web.dz[Web.About.form+'_'+$(item).data('id_lang')].on("removedfile", function(file) {
                    Web.About.remove_media.push({id_media: file.id_media});
                });
            });
        },
        createEvents: function() {
            $('.save-about-module').on('click', Web.About.onSave);
        },
        onSave: function(event) {
            var information = [];
            var media = {};
            $('#row-about-module .form-information').each(function(i, form) {
                var id_language = $(form).data('id_language');
                information[id_language] = {
                    title: $(form).find('.txt-name').val(),
                    description: $(form).find('.txt-description').val(),
                };
                media[Web.About.form+'_'+id_language] = Web.dz[Web.About.form+'_'+id_language].getAcceptedFiles();
            });

            var data = {
                id_about_module: $('#row-about-module').data('id-about-module'),
                information: information,
                remove_media: Web.About.remove_media,
                media: media
            };
            Web.About.saveModule(data);
        },
        saveModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_about_module', data.id_about_module);
            form_data.append('information', JSON.stringify(data.information));
            form_data.append('remove_media', JSON.stringify(data.remove_media));
            $.each(data.media, function(i, media) {
                $.each(media, function(m, file) {
                    if (typeof file.dataURL !== typeof undefined) {
                        form_data.append(i+'[]', file);
                    }
                });
            });

            $.ajax({
                url: '/api/module/about/save',
                type: 'POST',
                data: form_data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.success) {
                        Web.About.remove_media = [];
                        $('#row-about-module').data('id-about-module', response.id_about_module);
                        $.growl.notice({ title: "Success", message: "About module has saved successful" });
                    } else {
                        $.growl.error({ title: "Error", message: "An error while try save the module" });
                    }
                }
            });
        }
    },
    Testimonial: {
        form: 'testimonial_media',
        remove_media: [],
        init: function() {
            Web.Testimonial.initDropzone();
            Web.Testimonial.createEvents();
        },
        initDropzone: function() {
            $('#row-testimonial-module .testimonial_media').each(function(i, item) {
                Web.initDropzone($(item).data('id'));
                //existing
                $('#row-testimonial-module .remove_media input.'+$(item).data('id')).each(function(i, media) {
                    var mockFile = { name: $(media).data('path').replace('/storage/', ''), id_media: $(media).data('id_media')};
                    Web.dz[$(item).data('id')].options.addedfile.call(Web.dz[$(item).data('id')], mockFile);
                    Web.dz[$(item).data('id')].options.thumbnail.call(Web.dz[$(item).data('id')], mockFile, $(media).data('path'));
                });

                Web.dz[$(item).data('id')].on("removedfile", function(file) {
                    Web.Testimonial.remove_media.push({id_media: file.id_media});
                });
            });
        },
        createEvents: function() {
            $('.save-testimonial-module').on('click', Web.Testimonial.onSave);
        },
        onSave: function(event) {
            var information = [];
            var media = {};
            $('#row-testimonial-module .form-information').each(function(i, form) {
                var id_testimonial = $(form).data('id_testimonial');
                information[id_testimonial] = {
                    name: $(form).find('.txt-name').val(),
                    company: $(form).find('.txt-company').val(),
                    lang: []
                };
                $(form).find('textarea').each(function(l, textarea) {
                    information[id_testimonial].lang[$(textarea).data('id_language')] = $(textarea).val();
                });
                media[Web.Testimonial.form+'_'+id_testimonial] = Web.dz[Web.Testimonial.form+'_'+id_testimonial].getAcceptedFiles();
            });

            var data = {
                id_testimonial_module: $('#row-testimonial-module').data('id-testimonial-module'),
                information: information,
                remove_media: Web.Testimonial.remove_media,
                media: media
            };
            Web.Testimonial.saveModule(data);
        },
        saveModule: function(data) {
            var form_data = new FormData();
            form_data.append('id_testimonial_module', data.id_testimonial_module);
            form_data.append('information', JSON.stringify(data.information));
            form_data.append('remove_media', JSON.stringify(data.remove_media));
            $.each(data.media, function(i, media) {
                $.each(media, function(m, file) {
                    if (typeof file.dataURL !== typeof undefined) {
                        form_data.append(i+'[]', file);
                    }
                });
            });

            $.ajax({
                url: '/api/module/testimonial/save',
                type: 'POST',
                data: form_data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.success) {
                        Web.Testimonial.remove_media = [];
                        $.growl.notice({ title: "Success", message: "Testimonial module has saved successful" });
                    } else {
                        $.growl.error({ title: "Error", message: "An error while try save the module" });
                    }
                }
            });
        }
    },
};

$(function() {
    Web.init();
});