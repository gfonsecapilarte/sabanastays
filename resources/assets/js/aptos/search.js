$(document).ready(function(){

    var locale = $('#sa-location').text();

    $('#btn-search-aptos').click(function(e){
        e.preventDefault();
        var checkIn  = $('input[name="checkin"]').val(),
            checkOut = $('input[name="checkout"]').val();

        localStorage.setItem('checkin',checkIn);
        localStorage.setItem('checkout',checkOut);

        if(locale == 'en'){
            location.href = '/'+locale+'/booking';
        }
        else if(locale == 'es'){
            location.href = '/'+locale+'/reservacion';
        }
    });

    if($("#list-found-aptos").length > 0){
        var checkIn  = localStorage.getItem('checkin'),
            checkOut = localStorage.getItem('checkout');

        $.ajax({
            url: '/api/apartments',
            type: 'GET',
            data: {checkin: checkIn, checkout: checkOut}
        }).done(function(data){
            drawAptos(data);
        });
    }

    function drawAptos(data){
        var template = $('#apto-template');
        var html = '';


        $(data).each(function(index, el){
            var selecLang = '';

            $(el.lang).each(function(langInd,langEl){
                if(locale == 'es' && langEl.id_lang == 1){
                    $('#apto-template .mg-avl-room-title a').text(el.lang[langInd].name);
                    $('#apto-template .sa-apto-description').text(el.lang[langInd].description);
                    $('#list-found-aptos').append('<div class="mg-avl-room">'+template.html()+'</div>');
                }
                if(locale == 'en' && langEl.id_lang == 2){
                    $('#apto-template .mg-avl-room-title a').text(el.lang[langInd].name);
                    $('#apto-template .sa-apto-description').text(el.lang[langInd].description);
                    $('#list-found-aptos').append('<div class="mg-avl-room">'+template.html()+'</div>');
                }
            });


        });
    }

});
