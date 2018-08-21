$(document).ready(function() {
    $.ajax({
        url: '/api/rates',
        type: 'GET',
        success: function(rates){
            console.log(rates);
            // localStorage.setItem("currency", JSON.stringify(rates[0]));
            // if($('.currency-sign').length > 0){
            //     $('.currency-sign').text(rates[0].sign);
            // }
        }
    })
});