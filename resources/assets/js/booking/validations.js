export function saAddValidationRules(){
	$('input[name="paymentFirstName"]').rules('add', {
	  	required: true
	});

    $('input[name="paymentAddress"]').rules('add', {
	  	required: true
	});

    $('input[name="paymentCity"]').rules('add', {
	  	required: true
	});

    $('input[name="paymentState"]').rules('add', {
	  	required: true
	});

    $('input[name="paymentLastName"]').rules('add', {
	  	required: true
	});

    $('input[name="paymentPostalCode"]').rules('add', {
	  	required: true
	});

    $('input[name="paymentCountry"]').rules('add', {
	  	required: true
	});
}

export function saRemoveValidationRules(){
    $('input[name="paymentFirstName"]').rules('remove');
    $('input[name="paymentAddress"]').rules('remove');
    $('input[name="paymentCity"]').rules('remove');
    $('input[name="paymentState"]').rules('remove');
    $('input[name="paymentLastName"]').rules('remove');
    $('input[name="paymentPostalCode"]').rules('remove');
    $('input[name="paymentCountry"]').rules('remove');
}
