var button = $('.sales-left');
var button2 = $('.sales-right');
var info = $('.sales__details-left');
var info2 = $('.sales__details-right');

var buttonClickHandlerLeft = function() {
	var currentState = info.attr('data-state');
	if(currentState == 'active') {
		info.attr('data-state', 'inactive');
	} else {
		info.attr('data-state', 'active');
	}
};

var buttonClickHandlerRight = function() {
	var currentState = info2.attr('data-state');
	if(currentState == 'active') {
		info2.attr('data-state', 'inactive');
	} else {
		info2.attr('data-state', 'active');
	}
};

button.on('click', buttonClickHandlerLeft);

button2.on('click', buttonClickHandlerRight);