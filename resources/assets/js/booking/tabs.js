export function saBookingStepOne(){
	if ($('.mg-booking-form > ul > li:nth-child(1)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(1)').removeClass('mg-step-done');
	}
	if ($('.mg-booking-form > ul > li:nth-child(2)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(2)').removeClass('mg-step-done');
	}
	if ($('.mg-booking-form > ul > li:nth-child(3)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(3)').removeClass('mg-step-done');
	}

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

export function saBookingStepTwo(){
	$('.mg-booking-form > ul > li:nth-child(1)').addClass('mg-step-done');

	if ($('.mg-booking-form > ul > li:nth-child(2)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(2)').removeClass('mg-step-done');
	}
	if ($('.mg-booking-form > ul > li:nth-child(3)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(3)').removeClass('mg-step-done');
	}

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

export function saBookingStepThree(){
	$('.mg-booking-form > ul > li:nth-child(1)').addClass('mg-step-done');
	$('.mg-booking-form > ul > li:nth-child(2)').addClass('mg-step-done');

	if ($('.mg-booking-form > ul > li:nth-child(3)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(3)').removeClass('mg-step-done');
	}

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

export function saBookingStepFour(){
	$('.mg-booking-form > ul > li:nth-child(1)').addClass('mg-step-done');
	$('.mg-booking-form > ul > li:nth-child(2)').addClass('mg-step-done');
	$('.mg-booking-form > ul > li:nth-child(3)').addClass('mg-step-done');

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

export function saNextStep(element){
	element.tab('show');

	$('html, body').animate({
		scrollTop: $(".mg-booking-form").offset().top - 100
	}, 300);

	$('a[href="'+element.attr('href')+'"]').parents('li').trigger('click');
	$('.mg-booking-form > ul > li.active').removeClass('active');
	$('a[href="'+element.attr('href')+'"]').parents('li').addClass('active');
}

export function saPrevStep(element){
	element.tab('show');

	$('html, body').animate({
		scrollTop: $(".mg-booking-form").offset().top - 100
	}, 300);

	$('a[href="'+element.attr('href')+'"]').parents('li').trigger('click');
	$('.mg-booking-form > ul > li.active').removeClass('active');
	$('a[href="'+element.attr('href')+'"]').parents('li').addClass('active');
}
