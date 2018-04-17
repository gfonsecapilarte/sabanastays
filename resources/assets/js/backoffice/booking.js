var Booking = {
    init: function() {
        Booking.clear();
        Booking.createEvents();
        Booking.getBookings();
    },
    createEvents: function() {
        $('.app-search-list').on('click', 'a', Booking.onSearch);
        $('.app-search-list').on('keyup', 'input', Booking.onSearch);
    },
    clear: function() {
        $('#table-bookings tbody').empty();
    },
    getBookings: function(params) {
        var data = $.extend(params,{page: 1 });
        $.ajax({
            url: '/api/booking/list',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: data,
//            data: {
//                page: data.page
//            },
            success: function(response) {
                console.log('>>', response);
                if (response.success) {
                    Booking.showResults(response.bookings)
                } else {
                    alert(response.message);
                }
            }
        });
    },
    onSearch: function(event) {
        event.preventDefault();
        if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
            Booking.getBookings({term: $('.app-search-list input').val()});
        }
    },
    showResults: function(response) {
        console.log('bookings', response);
        Booking.clear();
        $.each(response.data, Booking.printRow);
    },
    printRow: function(i, booking) {
        var $row = $('<tr/>');

        $('<td/>').appendTo($row).append(
            $('<span/>').addClass('btn btn-link').text('Ref: '+booking.reference).on('click', {booking:booking}, Booking.onView)
        );
        $('<td/>').text(booking.user.firstname+' '+booking.user.lastname).appendTo($row);
        $('<td/>').appendTo($row).append(
            $('<span/>').addClass('text-muted').append(
                $('<i/>').addClass('fa fa-clock-o'), ' ', booking.booking_date_start
            )
        );
        if (booking.payment === null) {
            $('<td/>').text('$'+booking.total_payment).appendTo($row);
        } else {
            $('<td/>').text(booking.payment.currency.sign+booking.payment.amount).appendTo($row);
        }
        $('<td/>').appendTo($row).append(
            $('<div/>').addClass('label label-table '+Booking.getStatusLabel(booking.status)).text(Booking.getStatus(booking.status))
        );
        $('<td/>').appendTo($row).addClass('text-center').append(
            $('<span/>').addClass('btn btn-default').append(
                $('<i/>').addClass('fa fa-eye')
            ).on('click', {booking:booking}, Booking.onView)
        );

        $row.appendTo($('#table-bookings tbody'));
    },
    getStatusLabel: function(status) {
        var label = 'label-default';
        switch (status) {
            case 'RESERVED':
                label = 'label-info';
                break;
            case 'PAID':
                label = 'label-success';
                break;
            case 'CANCELLED':
                label = 'label-warning';
                break;
            case 'UNAVAILABLE':
            case 'INCOMPLETED':
            default:
                label = 'label-default';
                break;
        }

        return label;
    },
    onView: function(event) {
        console.log('booking detail', event.data.booking);
        var $modal = Booking.buildModal(event.data.booking);
        $modal.modal('show');
    },
    buildModal: function(booking) {
        var id = 'booking-modal-'+booking.id_booking;
        if (typeof $('#'+id)[0] !== typeof undefined) {
            return $('#'+id);
        }
        var $modal = $('<div/>');
        $modal.attr('id', id).addClass('modal fade booking-modal').attr('role','dialog').append(
            $('<div/>').addClass('modal-dialog').attr('role','document').append(
                $('<div/>').addClass('modal-content').append(
                    $('<div/>').addClass('modal-header').append(
                        $('<button/>').attr('type','button').addClass('close').attr('data-dismiss','modal').attr('aria-label','Close').append(
                            $('<span/>').attr('aria-hidden','true').html('&times;')
                        ),
                        $('<h4/>').addClass('modal-title').text('Booking #'+booking.reference)
                    ),
                    $('<div/>').addClass('modal-body').append(
                        $('<div/>').addClass('row').append(
                            $('<div/>').addClass('col-xs-12 col-md-6').append(
                                $('<h2/>').text('Booking'),
                                $('<hr/>'),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Checkin'),
                                    $('<span/>').addClass('col-xs-8').text(booking.booking_date_start),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Checkout'),
                                    $('<span/>').addClass('col-xs-8').text(booking.booking_date_end),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Name'),
                                    $('<span/>').addClass('col-xs-8').text(booking.user.firstname+' '+booking.user.lastname),
                                ),
                                $('<div />').addClass('row').append(
                                    $('<label/>').addClass('col-xs-4').text('Email'),
                                    $('<span/>').addClass('col-xs-8').text(booking.user.email),
                                )
                            ),
                            $('<div/>').addClass('col-xs-12 col-md-6').append(
                                $('<h2/>').text('Payment'),
                                $('<hr/>'),
                                (booking.payment === null) ? 'No payment recorded' : [
                                    $('<div />').addClass('row').append(
                                        $('<label/>').addClass('col-xs-4').text('Total'),
                                        $('<span/>').addClass('col-xs-8').text(booking.payment.currency.sign+booking.payment.amount),
                                    ),
                                    $('<div />').addClass('row').append(
                                        $('<label/>').addClass('col-xs-4').text('Status'),
                                        $('<span/>').addClass('col-xs-8').text(Booking.getStatus(booking.status)),
                                    ),
                                    $('<div />').addClass('row').append(
                                        $('<label/>').addClass('col-xs-4').text('Method'),
                                        $('<span/>').addClass('col-xs-8').text(booking.payment.payment_method),
                                    ),
                                    $('<div />').addClass('row').append(
                                        $('<label/>').addClass('col-xs-4').text('Trans. ID'),
                                        $('<span/>').addClass('col-xs-8').text(booking.payment.transaction_id),
                                    )
                                ]
                            ),
                        )
                    ),
                    $('<div/>').addClass('modal-footer').append(
                        $('<button/>').attr('type','button').addClass('btn btn-default').attr('data-dismiss','modal').text('Close'),
                        (booking.status === 'CANCELLED') ? null : $('<button/>').attr('type','button').addClass('btn btn-warning').text('Cancel booking').on('click', {$modal:$modal,booking:booking}, Booking.onCancelBooking)
                    )
                )
            )
        ).appendTo($('body'));
        return $modal;
    },
    onCancelBooking: function(event) {
        if (!confirm('Sure cancel booking')) {
            return false;
        }
        Booking.cancelBooking(event.data.booking, event.data.$modal);
    },
    cancelBooking: function(booking, $modal) {
        if (booking.status === 'CANCELLED') {
            return;
        }
        $.ajax({
            url: '/api/booking/cancel',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {
                id_booking: booking.id_booking
            },
            success: function(response) {
                if (response.success) {
                    $modal.modal('hide');
                    alert('Booking cancelled');
                    $('body').find('.booking-modal').remove();
                    Booking.getBookings();
                } else {
                    alert(response.message);
                }
            }
        });
    },
    getStatus: function(status) {
        var label = ' - ';
        switch (status) {
            case 'RESERVED':
                label = 'Reserved';
                break;
            case 'PAID':
                label = 'Paid';
                break;
            case 'CANCELLED':
                label = 'Cancelled';
                break;
            case 'UNAVAILABLE':
                label = 'Unavailable';
                break;
            case 'INCOMPLETED':
                label = 'Incompleted';
                break;
            default:
                label = ' Not found ';
                break;
        }

        return label;
    }
};

$(function() {
    Booking.init();
});