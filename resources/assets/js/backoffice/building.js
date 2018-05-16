var Building = {
    init: function() {
        if (typeof $('#container-buildings')[0] === typeof undefined) {
            return;
        }
        Building.clear();
        Building.createEvents();
        Building.getBuildings();
    },
    createEvents: function() {
        $('.app-search-list').on('click', 'a', Building.onSearch);
        $('.app-search-list').on('keyup', 'input', Building.onSearch);
    },
    clear: function() {
        $('#table-buildings tbody').empty();
    },
    getBuildings: function(params) {
        var data = $.extend(params,{page: 1 });
        $.ajax({
            url: '/api/building/list',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: data,
            success: function(response) {
                if (response.success) {
                    Building.showResults(response.buildings)
                } else {
                    alert(response.message);
                }
            }
        });
    },
    onSearch: function(event) {
        event.preventDefault();
        if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
            if ($('.app-search-list input').val() === '') {
                Building.getBuildings();
            } else {
                Building.getBuildings({term: $('.app-search-list input').val()});
            }
        }
    },
    showResults: function(response) {
        Building.clear();
        $.each(response, Building.printRow);
    },
    printRow: function(i, building) {
        var $row = $('<tr/>');
        $('<td/>').appendTo($row).append(
            $('<span/>').addClass('btn btn-link').text('#'+building.id_building).on('click', {building:building}, Building.onView)
        );
        $('<td/>').text(building.lang[0].name).appendTo($row);
        $('<td/>').text(building.postal_code).appendTo($row);
        $('<td/>').text(building.city.name).appendTo($row);
        $('<td/>').appendTo($row).addClass('text-center').append(
            $('<div/>').addClass('btn-group').attr('role','group').append(
                $('<a/>').addClass('btn btn-default').attr('href', '/dashboard/building/edit?id_building='+building.id_building).append(
                    $('<i/>').addClass('fa fa-pencil')
                )
            )
        );

        $row.appendTo($('#table-buildings tbody'));
    },
    onDeleteApartment: function(event) {
        if (!confirm('Sure delete building')) {
            return false;
        }
        Building.deleteBuilding(event.data.building, event.data.$modal);
    },
    deleteBuilding: function(building, $modal) {
        $.ajax({
            url: '/api/building/remove',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {
                id_building: building.id_building
            },
            success: function(response) {
                if (response.success) {
                    $modal.modal('hide');
                    alert('Building deleted');
                    Building.getBuildings();
                } else {
                    alert(response.message);
                }
            }
        });
    }
};

$(function() {
    Building.init();
});