$(document).ready(function() {

    /*
     * Call states
     */
    $('select[name="id_country"]').change(function(event) {
        var id_country = $(this).val();
        $.ajax({
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
    });

    /*
     * Call cities
     */
    $('select[name="id_state"]').change(function(event) {
        var id_state = $(this).val();
        $.ajax({
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
    });

});
