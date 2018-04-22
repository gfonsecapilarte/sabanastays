export function successMessage(container,message){
    $('.alert-danger',container).addClass('hidden');
    $('.alert-success',container).removeClass('hidden').children('span').text(message);
}

export function errorMessage(container, message){
    $('.alert-success',container).addClass('hidden');
    $('.alert-danger',container).removeClass('hidden').children('span').text(message);
}
