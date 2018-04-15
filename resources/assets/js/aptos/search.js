let date = require('date-and-time');
date.locale(locale.toLowerCase());

$(document).ready(function(){
    /*
     * Vars to identify what page we are
     */
    var currentPage = 1;
    var totalPages  = 0;

    /*
     * - Search aptos from home header form
     * - Redirect to booking page
     */
    $('#btn-search-aptos').click(function(e){
        e.preventDefault();
        var checkIn     = $('input[name="checkin"]'),
            checkOut    = $('input[name="checkout"]'),
            type        = $('select[name="type"]'),
            checkInVal  = checkIn.val(),
            checkOutVal = checkOut.val(),
            typeVal     = type.val();

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

        if(typeVal == null){
            type.siblings('span').addClass('error');
        }else{
            type.siblings('span').removeClass('error');
        }

        if(checkInVal.length != 0 && checkOutVal.length != 0 && typeVal != null){
            localStorage.setItem('checkin',checkInVal);
            localStorage.setItem('checkout',checkOutVal);
            localStorage.setItem('atpoType',typeVal);

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
        checkOut = localStorage.getItem('checkout'),
        atpoType = localStorage.getItem('atpoType');

    if($("#list-found-aptos").length > 0){
        getAptos();
    }

    /*
     * Function to get apartments
     */
    function getAptos(){
        var ajax = $.ajax({
            url: '/api/apartments',
            type: 'GET',
            data: {checkin: checkIn, checkout: checkOut, type: atpoType, page: currentPage, items_per_page: 5}
        }).done(function(data){
            $('#list-found-aptos').html('');
            totalPages = data.pagination.pages;
            drawAptos(data);
        });

        return ajax;
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

        $(data.apartments).each(function(index, el){
            var lang = el.lang[''+locale+''];

            if(lang != undefined){
                $('#apto-template .sa-thumbnail').text(el.thumbnail.path);
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

                $('#apto-template .btn-next-tab').attr('id', 'apto_'+el.id_apartment);

                $('#apto-template .mg-room-fecilities .col-sm-12').html(amenHtml);
                $('#list-found-aptos').append('<div class="mg-avl-room">'+template.html()+'</div>');
            }
        });

        drawPaginator(data.pagination.pages);
    }

    /*
     * Select page
     */
    $('.pagination').on('click','li',function(e){
        e.preventDefault();
        var page  = $(this).children('a').attr('href').split('#')[1];

        if(page == "prev"){
            if(currentPage > 1){
                currentPage--;
            }
        }
        else if(page == "next"){
            if(currentPage < totalPages){
                currentPage++;
            }
        }
        else{
            currentPage = page;
        }

        getAptos().then(function(data){
            $('.pagination a[href="#'+currentPage+'"]').parent('li').addClass('sa-active');
            $('.pagination a[href="#'+currentPage+'"]').parent('li').siblings('li').removeClass('sa-active');
        });
    });

    /*
     * Function to drawn paginator
     */
    function drawPaginator(pages){
        if(currentPage == 1){
            var html = '<li><a href="#prev" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
            for(i=0;i<pages;i++){
                var page    = i+1;
                var active  = (i == 0) ? 'sa-active' : '';
                html += '<li class="'+active+'"><a href="#'+page+'">'+page+'</a></li>';
            }
            html += '<li><a href="#next" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
            $('.pagination').html(html);
        }
    }


});
