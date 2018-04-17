/*
 * Call states
 */
$('select[name="id_country"]').change(function(event) {
    //var id_country = $(this).val();
    callStates();
});

/*
 * Call cities
 */
$('select[name="id_state"]').change(function(event) {
    //var id_state = $(this).val();
    callCities();
});

/*
 * Function to call states
 */
export function callStates(){
    var ajax = $.ajax({
        url: '/api/location/states',
        type: 'GET',
        success: function(states){
            var options = '<option value="" disabled selected></opion>';
            $(states).each(function(index, el) {
                options += '<option value='+el.id_state+'>'+el.name+'</option>';
            });
            $('select[name="id_state"]').html(options);
        }
    });
    return ajax;
}

export function callCities(){
    var ajax = $.ajax({
        url: '/api/location/cities',
        type: 'GET',
        success: function(cities){
            var options = '<option value="" disabled selected></opion>';
            $(cities).each(function(index, el) {
                options += '<option value='+el.id_city+'>'+el.name+'</option>';
            });
            $('select[name="id_city"]').html(options);
        }
    });
    return ajax;
}
