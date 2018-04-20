var Apartment = {
    init: function() {
        if (typeof $('#container-apartments')[0] === typeof undefined) {
            return;
        }
        Apartment.clear();
        Apartment.createEvents();
        Apartment.getApartments();
    },
    createEvents: function() {
        $('.app-search-list').on('click', 'a', Apartment.onSearch);
        $('.app-search-list').on('keyup', 'input', Apartment.onSearch);
    },
    clear: function() {
        $('#table-apartments tbody').empty();
    },
    getApartments: function(params) {
        var data = $.extend(params,{page: 1 });
        $.ajax({
            url: '/api/apartment/list',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: data,
            success: function(response) {
                if (response.success) {
                    Apartment.showResults(response.apartments)
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
                Apartment.getApartments();
            } else {
                Apartment.getApartments({term: $('.app-search-list input').val()});
            }
        }
    },
    showResults: function(response) {
        Apartment.clear();
        $.each(response.data, Apartment.printRow);
    },
    printRow: function(i, apartment) {
        console.log('>APARTMENT', apartment);
        var $row = $('<tr/>');

        $('<td/>').appendTo($row).append(
            $('<span/>').addClass('btn btn-link').text('#'+apartment.id_apartment).on('click', {apartment:apartment}, Apartment.onView)
        );
        $('<td/>').text(apartment.lang[0].name).appendTo($row);
        $('<td/>').text(apartment.type.lang[0].name).appendTo($row);
        $('<td/>').text(apartment.number).appendTo($row);
        $('<td/>').text(apartment.currency.iso_code+apartment.currency.sign+apartment.price).appendTo($row);
        $('<td/>').appendTo($row).addClass('text-center').append(
            $('<div/>').addClass('btn-group').attr('role','group').append(
                $('<span/>').addClass('btn btn-default').append(
                    $('<i/>').addClass('fa fa-eye')
                ).on('click', {apartment:apartment}, Apartment.onView),
                $('<a/>').addClass('btn btn-default').attr('href', '/dashboard/apartment/edit?id_apartment='+apartment.id_apartment).append(
                    $('<i/>').addClass('fa fa-pencil')
                )
            )
        );

        $row.appendTo($('#table-apartments tbody'));
    },
    onView: function(event) {
        var $modal = Apartment.buildModal(event.data.apartment);
        $modal.modal('show');
    },
    buildModal: function(apartment) {
        var id = 'apartment-modal-'+apartment.id_apartment;
        if (typeof $('#'+id)[0] !== typeof undefined) {
            return $('#'+id);
        }
        var $modal = $('<div/>');
        $modal.attr('id', id).addClass('modal fade apartment-modal').attr('role','dialog').append(
            $('<div/>').addClass('modal-dialog').attr('role','document').append(
                $('<div/>').addClass('modal-content').append(
                    $('<div/>').addClass('modal-header').append(
                        $('<button/>').attr('type','button').addClass('close').attr('data-dismiss','modal').attr('aria-label','Close').append(
                            $('<span/>').attr('aria-hidden','true').html('&times;')
                        ),
                        $('<h4/>').addClass('modal-title').text('Apartment #'+apartment.id_apartment)
                    ),
                    $('<div/>').addClass('modal-body').append(
                        $('<div/>').addClass('row').append(
                            $('<div/>').addClass('col-xs-12 col-md-6').append(
                                $('<h2/>').text('Information'),
                                $('<hr/>'),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Name'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.lang[0].name),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Price'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.currency.iso_code+apartment.currency.sign+apartment.price),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('City'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.building.city.name+' ('+apartment.building.postal_code+')'),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Building'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.building.lang[0].name),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Address'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.building.address),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Type'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.type.lang[0].name),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Floor'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.floor),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Number'),
                                    $('<span/>').addClass('col-xs-8').text(apartment.number),
                                )
                            ),
                            $('<div/>').addClass('col-xs-12 col-md-6').append(
                                $('<h2/>').text('Amenities'),
                                $('<hr/>'),
                                Apartment.getAmenitiesList(apartment.amenities),
                            ),
                        )
                    ),
                    $('<div/>').addClass('modal-footer').append(
                        $('<button/>').attr('type','button').addClass('btn btn-default').attr('data-dismiss','modal').text('Close')
//                        $('<button/>').attr('type','button').addClass('btn btn-warning').text('Delete apartment').on('click', {$modal:$modal,apartment:apartment}, Apartment.onDeleteApartment)
                    )
                )
            )
        ).appendTo($('body'));
        return $modal;
    },
    getAmenitiesList: function(amenities) {
        var $amenities = [];
        $.each(amenities, function(i, amenity) {
            $amenities.push($('<div/>').append(
                $('<i/>').addClass('fa '+amenity.icon.icon), ' ',
                $('<span/>').text(amenity.lang.name)
            ));
        });
        return $amenities;
    },
    onDeleteApartment: function(event) {
        if (!confirm('Sure delete apartment')) {
            return false;
        }
        Apartment.deleteApartment(event.data.apartment, event.data.$modal);
    },
    deleteApartment: function(apartment, $modal) {
        $.ajax({
            url: '/api/apartment/remove',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {
                id_apartment: apartment.id_apartment
            },
            success: function(response) {
                if (response.success) {
                    $modal.modal('hide');
                    alert('Apartment deleted');
                    $('body').find('.apartment-modal').remove();
                    Apartment.getApartments();
                } else {
                    alert(response.message);
                }
            }
        });
    }
};

$(function() {
    Apartment.init();
});