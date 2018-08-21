$(document).ready(function() {
    $.ajax({
        url: '/api/currencies',
        type: 'GET',
        success: function(currencies){
            // console.log(currencies[0]);
            localStorage.setItem("currency", JSON.stringify(currencies[0]));
            if($('.currency-sign').length > 0){
                $('.currency-sign').text(currencies[0].sign);
            }
        }
    })
});
