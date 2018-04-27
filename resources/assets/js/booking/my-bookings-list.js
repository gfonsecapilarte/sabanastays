$(document).ready(function() {

    if($('#booking-template').length){
        getBookingsList('paid');
    }

    /*
     * Get a list of payment acording a gave status like parameter
     */
    function getBookingsList(status){
        $.ajax({
            url: '/api/bookings',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token'),
                status: status,
            },
            success: function(reply){
                //console.log(reply.bookings);
                drawBookings(reply.bookings);
                //console.log(reply);
                //$('#'+status).html('<pre>'+reply+'</pre>');
                // if(reply.success != null){
                //     address.first.id = reply.address.id_address;
                //     if(address.second.different){
                //         address.second.register();
                //     }
                //     else{
                //         address.second.id = reply.address.id_address;
                //         payment.pay();
                //     }
                // }
            }
        });
    }

    /*
     * Function to draw bookings
     */
    function drawBookings(bookings){
        var template = $('#booking-template');
        $(bookings).each(function(index, booking){
            booking.apartment.building.lang.map(function(b) {
                if(b.language.iso == locale){
                    $('#booking-template .sa-building-name').text(b.name);
                }
            });

            booking.apartment.type.lang.map(function(type) {
                if(type.language.iso == locale){
                    $('#booking-template .sa-apartment-type').text(type.name);
                }
            });

            $('#booking-template .sa-booking-reference span').text(booking.reference);
            $('#booking-template .sa-booking-price').text(booking.payment.amount);

            //console.log(building);
        });

        $('#upcoming .mg-avl-rooms').append('<div class="mg-avl-room">'+template.html()+'</div>');
    }
});
