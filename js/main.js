var button = $('.sales');
var info = $('.sales__details');

var buttonCLickHandler = function() {
	var currentState = info.attr('data-state');
	if(currentState == 'active') {
		info.attr('data-state', 'inactive');
	} else {
		info.attr('data-state', 'active');
	}
};

button.on('click', buttonCLickHandler);