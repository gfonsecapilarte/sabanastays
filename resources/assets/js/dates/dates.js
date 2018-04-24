let date = require('date-and-time');
date.locale(locale.toLowerCase());

export function converDate(_date){
    var _date = _date.split('-'),
        _date = new Date(_date[0],_date[1]-1,_date[2]);

    return date.format(_date, 'MMMM DD YYYY');
}

export function calculateNights(date_a,date_b){
    var date_a = date_a.split('-'),
        date_a = new Date(date_a[0],date_a[1]-1,date_a[2]);

    var date_b = date_b.split('-'),
        date_b = new Date(date_b[0],date_b[1]-1,date_b[2]);

    return date.subtract(date_b,date_a).toDays();
}
