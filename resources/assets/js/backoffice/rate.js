var Rate = {
    init: function() {
        

        if (typeof $('#container-rates')[0] === typeof undefined) {
            return;
        }

        console.log("im here getRates");
        Rate.clear();
        Rate.createEvents();
        Rate.getRates();
    },
    createEvents: function() {
        $('.app-search-list').on('click', 'a', Rate.onSearch);
        $('.app-search-list').on('keyup', 'input', Rate.onSearch);
    },
    clear: function() {
        $('#table-rates tbody').empty();
    },
    getRates: function(params) {
        var data = $.extend(params,{page: 1 });

        console.log("im here getRates");
        console.log(data);
        $.ajax({
            url: '/api/rate/list',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: data,
            success: function(response) {
                if (response.success) {
                    console.log(response);
                    Rate.showResults(response.rates)
                } else {
                    alert(response.message);
                }
            }
        });
    },
    onSearch: function(event) {
        event.preventDefault();
        if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
            if ($('.app-search-list input').val() === '') {
                Rate.getRates();
            } else {
                Rate.getRates({term: $('.app-search-list input').val()});
            }
        }
    },
    showResults: function(response) {
        Rate.clear();
        $.each(response.data, Rate.printRow);
    },
    printRow: function(i, rate) {
        var $row = $('<tr/>');

        $('<td/>').appendTo($row).append(
            $('<span/>').addClass('btn btn-link').text('#'+rate.id_rate).on('click', {rate:rate}, rate.onView)
        );
        $('<td/>').text(rate.name).appendTo($row);
        $('<td/>').text(rate.from+' - '+rate.to).appendTo($row);
        $('<td/>').text(rate.variant+'%').appendTo($row);
        $('<td/>').appendTo($row).addClass('text-center').append(
            $('<div/>').addClass('btn-group').attr('role','group').append(
                // $('<span/>').addClass('btn btn-default').append(
                //     $('<i/>').addClass('fa fa-eye')
                // ).on('click', {rate:rate}, rate.onView),
                $('<a/>').addClass('btn btn-default').attr('href', '/dashboard/rates/edit?id_rate='+rate.id_rate).append(
                    $('<i/>').addClass('fa fa-pencil')
                )
            )
        );

        $row.appendTo($('#table-rates tbody'));
    },
    onDeleteRate: function(event) {
        if (!confirm('Sure delete Rate')) {
            return false;
        }
        Rate.deleteRate(event.data.Rate, event.data.$modal);
    },
    deleteRate: function(Rate, $modal) {
        $.ajax({
            url: '/api/Rate/remove',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {
                id_Rate: Rate.id_Rate
            },
            success: function(response) {
                if (response.success) {
                    $modal.modal('hide');
                    alert('Rate deleted');
                    $('body').find('.Rate-modal').remove();
                    Rate.getRates();
                } else {
                    alert(response.message);
                }
            }
        });
    }
};

$(function() {
    Rate.init();
});