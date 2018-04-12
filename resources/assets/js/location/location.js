$(document).ready(function() {
    /*
     * Call states
     */
    $('select[name="country"]').change(function(event) {
        var id_country = $(this).val();
        $.ajax({
            url: '/api/location/states',
            type: 'GET',
            data: {id_country: id_country},
            success: function(reply){
                console.log(reply);
            }
        });
    });

});
