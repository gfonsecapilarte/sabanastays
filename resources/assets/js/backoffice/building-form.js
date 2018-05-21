var BuildingForm = {
    init: function() {
        if (typeof $('#container-form-building')[0] === typeof undefined) {
            return;
        }
        BuildingForm.clear();
        BuildingForm.createEvents();
        setTimeout(BuildingForm.initMap, 1000);
//        BuildingForm.initMap();
    },
    createEvents: function() {
        $('.save-building').on('click', BuildingForm.onSaveBuilding);
    },
    clear: function() {
        $('#lst-city').val($('#lst-city option[selected]').val());
    },
    initMap: function() {
        var lat = $('#building-map').data('lat');
        var lng = $('#building-map').data('lng');
        var zoom = 17;
        if (lat === '' || lat === null) {
            lat = 9.926304;
            zoom = 12;
        }
        if (lng === '' || lng === null) {
            lng = -84.1833856;
            zoom = 12;
        }
        BuildingForm.map = new google.maps.Map(document.getElementById('building-map'), {
            zoom: zoom,
            center: {lat: lat,lng: lng}
        });
        BuildingForm.marker = new google.maps.Marker({
            map: BuildingForm.map
        });
        BuildingForm.marker.setPosition(BuildingForm.map.getCenter());

        var input = document.getElementById('txt-address');
        var searchBox = new google.maps.places.SearchBox(input);
        BuildingForm.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        BuildingForm.map.addListener('bounds_changed', function() {
          searchBox.setBounds(BuildingForm.map.getBounds());
        });

        BuildingForm.map.addListener('center_changed', function() {
            BuildingForm.marker.setPosition(BuildingForm.map.getCenter());
        });

        searchBox.addListener('places_changed',function () {
            var places = searchBox.getPlaces();
            if (places.length == 0){
                return;
            }

            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place){
                if (!place.geometry){
                    return;
                }
                if (place.geometry.viewport){
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            BuildingForm.map.fitBounds(bounds);
        });
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
//            id_city: $('#lst-city').val(),
            address: $('#txt-address').val(),
//            postal_code: $('#txt-postal_code').val(),
            lat: BuildingForm.marker.getPosition().lat(),
            lng: BuildingForm.marker.getPosition().lng()
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