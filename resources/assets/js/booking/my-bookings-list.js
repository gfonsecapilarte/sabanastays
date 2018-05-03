/**
 * Module to convert dates to human format
 */
import {
    converDate,
    calculateNights,
    getHumanDay
} from "../dates/dates.js";

$(document).ready(function() {

    if($('#booking-template').length){
        getBookingsList('upcoming');
    }

    /*
     * Get completed Bookings list
     */
    $('a[href="#completed"]').click(function(e){
        getBookingsList('completed');
    });

    /*
     * Get a list of payment acording a gave status like parameter
     */
    function getBookingsList(status){
        console.log(status);
        $.ajax({
            url: '/api/bookings',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token'),
                status: status,
            },
            success: function(reply){
                if(reply.success != null && reply.success){
                    drawBookings(reply.bookings,status);
                }
            }
        });
    }

    /*
     * Function to draw bookings
     */
    function drawBookings(bookings,status){
        var template = $('#booking-template');
        $(bookings).each(function(index, booking){

            if(booking.apartment.thumbnail != null){
                $('#booking-template .sa-thumbnail').attr('src',mainUrl+'/'+booking.apartment.thumbnail.path);
            }

            /** Draw apartment name **/
            booking.apartment.building.lang.map(function(b) {
                if(b.language.iso == locale){
                    $('#booking-template .sa-building-name').text(b.name);
                }
            });

            /** Draw category apartment name **/
            booking.apartment.type.lang.map(function(type) {
                if(type.language.iso == locale){
                    $('#booking-template .sa-apartment-type').text(type.name);
                }
            });

            $('#booking-template .sa-booking-reference span').text(booking.reference);
            $('#booking-template .sa-booking-price').text(booking.payment.amount);

            /** Draw dates **/
            var dateStart = converDate(booking.booking_date_start).split(' ');
            var dateEnd   = converDate(booking.booking_date_end).split(' ');

            $('#booking-template .sa-date.start .day').text(dateStart[1]);
            $('#booking-template .sa-date.start .month').text(dateStart[0]);
            $('#booking-template .sa-date.start .year').text(dateStart[2]);
            $('#booking-template .sa-date.start .day_b').text(getHumanDay(booking.booking_date_start));
            $('#booking-template .sa-date.end .day').text(dateEnd[1]);
            $('#booking-template .sa-date.end .month').text(dateEnd[0]);
            $('#booking-template .sa-date.end .year').text(dateEnd[2]);
            $('#booking-template .sa-date.end .day_b').text(getHumanDay(booking.booking_date_end));

            /** Draw amenities **/
            var amenities = '';
            $(booking.apartment.amenities).each(function(i, amenity){
                amenity.lang.map(function(amen) {
                    if(amen.language.iso == locale){
                        amenities += '<li><i class="'+amenity.icon.icon+'"></i>'+amen.name+'</li>';
                    }
                });
            });

            $('#booking-template .mg-room-fecilities ul').html(amenities);
            $('#'+status+' .mg-avl-rooms').append('<div class="mg-avl-room">'+template.html()+'</div>');
        });
    }


    /*
	 * Click to show details of a booking
	 */
	$('.tab-content').on('click','.booking-detail .btn-main',function(){
		var button = $(this);
		button.parent("div").siblings(".mg-features").slideToggle("400", function() {
			if($(this).is(":visible")){
				button.text("Close Details");
			}
			else{
				button.text("View Details");
			}
		});
	});
});
