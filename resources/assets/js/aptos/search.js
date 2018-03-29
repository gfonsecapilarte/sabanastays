$(document).ready(function(){
    /*
     * - Search aptos from home header form
     * - Redirect to booking page
     */
    $('#btn-search-aptos').click(function(e){
        e.preventDefault();
        var checkIn  = $('input[name="checkin"]').val(),
            checkOut = $('input[name="checkout"]').val();

        localStorage.setItem('checkin',checkIn);
        localStorage.setItem('checkout',checkOut);

        if(locale_pr == 'en'){
            location.href = '/'+locale_pr+'/booking';
        }
        else if(locale_pr == 'es'){
            location.href = '/'+locale_pr+'/reservacion';
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
        $('#sa-check-in').text(checkIn);
        $('#sa-check-out').text(checkOut);

        $(data).each(function(index, el){
            var lang = el.lang[''+locale+''];

            if(lang != undefined){
                $('#apto-template .mg-avl-room-title a').text(lang.name);
                $('#apto-template .sa-apto-description').text(lang.short_descritpiton);
                $('#apto-template .sa-apto-price span').text('$'+el.price);

                if(locale == 'EN'){
                    $('#apto-template .sa-apto-link').attr('href', '/en/apartment/'+el.id_apartment);
                }
                else if(locale == 'ES'){
                    $('#apto-template .sa-apto-link').attr('href', '/es/apartamento/'+el.id_apartment);
                }

                /* Amenities */
                var amenities = el.amenities.map(amenity => amenity.lang[''+locale+'']);
                var amenHtml = '<ul>';
                amenities.forEach(function(element){
                    amenHtml += '<li>'+element.name+'</li>';
                });
                amenHtml += '</ul>';

                $('#apto-template .mg-room-fecilities .col-sm-12').html(amenHtml);
                $('#list-found-aptos').append('<div class="mg-avl-room">'+template.html()+'</div>');
            }

        });
    }
});
