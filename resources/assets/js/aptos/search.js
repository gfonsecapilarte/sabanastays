let date = require('date-and-time');
date.locale(locale.toLowerCase());

$(document).ready(function(){
    /*
     * - Search aptos from home header form
     * - Redirect to booking page
     */
    $('#btn-search-aptos').click(function(e){
        e.preventDefault();
        var checkIn     = $('input[name="checkin"]'),
            checkOut    = $('input[name="checkout"]'),
            checkInVal  = checkIn.val(),
            checkOutVal = checkOut.val();

        if(checkInVal.length == 0){
            checkIn.addClass('error');
            checkIn.siblings('.input-group-addon').addClass('error');
        }
        else{
            checkIn.removeClass('error');
            checkIn.siblings('.input-group-addon').removeClass('error');
        }

        if(checkOutVal.length == 0){
            checkOut.addClass('error');
            checkOut.siblings('.input-group-addon').addClass('error');
        }else{
            checkOut.removeClass('error');
            checkOut.siblings('.input-group-addon').removeClass('error');
        }

        if(checkInVal.length != 0 && checkOutVal.length != 0){
            localStorage.setItem('checkin',checkInVal);
            localStorage.setItem('checkout',checkOutVal);

            if(locale == 'EN'){
                location.href = '/en/booking';
            }
            else if(locale == 'ES'){
                location.href = '/es/reservacion';
            }
        }
    });

    /*
     * Call api to search aptos with date parameters
     */
    var checkIn  = localStorage.getItem('checkin'),
        checkOut = localStorage.getItem('checkout');

    if($("#list-found-aptos").length > 0){
        $.ajax({
            url: '/api/apartments',
            type: 'GET',
            data: {checkin: checkIn, checkout: checkOut}
        }).done(function(data){
            drawAptos(data);
        });
    }

    /*
     * Function to drawn the found aptos
     */
    function drawAptos(data){
        var template = $('#apto-template');

        /* print dates */
        var _checkIn = checkIn.split('-'),
            _checkIn = new Date(_checkIn[0],_checkIn[1]-1,_checkIn[2]);

        var _checkOut = checkOut.split('-'),
            _checkOut = new Date(_checkOut[0],_checkOut[1]-1,_checkOut[2]);

        $('#sa-check-in').text(date.format(_checkIn, 'MMMM DD YYYY'));
        $('#sa-check-out').text(date.format(_checkOut, 'MMMM DD YYYY'));

        $(data).each(function(index, el){
            var lang = el.lang[''+locale+''];

            if(lang != undefined){
                $('#apto-template .mg-avl-room-title a').text(lang.name);
                $('#apto-template .sa-apto-description').text(lang.short_description);
                $('#apto-template .sa-apto-price span').text('$'+el.price);

                if(locale == 'EN'){
                    $('#apto-template .sa-apto-link').attr('href', '/en/apartment/'+el.id_apartment);
                }
                else if(locale == 'ES'){
                    $('#apto-template .sa-apto-link').attr('href', '/es/apartamento/'+el.id_apartment);
                }

                /* Amenities */
                var amenHtml = '<ul>';
                el.amenities.forEach(function(amenity){
                    amenHtml += '<li><i class="'+amenity.icon+'"></i>'+amenity.lang[''+locale+''].name+'</li>';
                });
                amenHtml += '</ul>';

                $('#apto-template .mg-room-fecilities .col-sm-12').html(amenHtml);
                $('#list-found-aptos').append('<div class="mg-avl-room">'+template.html()+'</div>');
            }

        });
    }
});
