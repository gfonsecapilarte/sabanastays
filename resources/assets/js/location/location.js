/*
 * Call states
 */
$('select[name="id_country"]').change(function(event) {
    //var id_country = $(this).val();
    var form = $(this).parent().parent().parent().parent('form');
    callStates(form);
});

/*
 * Call cities
 */
$('select[name="id_state"]').change(function(event) {
    //var id_state = $(this).val();
    var form = $(this).parent().parent().parent().parent('form');
    callCities(form);
});

/*
 * Function to call states
 */
export function callStates(form){
    var ajax = $.ajax({
        url: '/api/location/states',
        type: 'GET',
        data: {
            id_country :$('select[name="id_country"]', form).val()
        },
        success: function(states){
            var options = '<option value="" disabled selected></opion>';
            $(states).each(function(index, el) {
                options += '<option value='+el.id_state+'>'+el.name+'</option>';
            });
            $('select[name="id_state"]',form).html(options);
        }
    });
    return ajax;
}

export function callCities(form){
    var ajax = $.ajax({
        url: '/api/location/cities',
        type: 'GET',
        data: {
            id_state :$('select[name="id_state"]', form).val()
        },
        success: function(cities){
            var options = '<option value="" disabled selected></opion>';
            $(cities).each(function(index, el) {
                options += '<option value='+el.id_city+'>'+el.name+'</option>';
            });
            $('select[name="id_city"]',form).html(options);
        }
    });
    return ajax;
}
