$(document).ready(function() {
    sliderResponsive();
    $(window).resize(function(){
        sliderResponsive();
    });

    function sliderResponsive(){
        if($('#mega-slider').css('position') == 'relative'){
            var searcher = $('#mega-slider .mg-book-now').clone();
            $(searcher).insertAfter('#mega-slider');
            $('#mega-slider .mg-book-now').remove();

            $('.input-group.mg-check-in').datepicker({
        		startDate: "dateToday",
        		autoclose: true,
        		format: "yyyy-mm-dd"
        	});

            $('.input-group.mg-check-out').datepicker({
        		startDate: "dateToday",
        		autoclose: true,
        		format: "yyyy-mm-dd"
        	});
        }
    }
});
