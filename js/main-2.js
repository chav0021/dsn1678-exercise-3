var theButton = $('.the-button');
var heading = $('.heading');

var buttonCLickHandler = function() {
	var currentState = heading.attr('data-state');
	if(currentState == 'active') {
		heading.attr('data-state', 'inactive');
	} else {
		heading.attr('data-state', 'active');
	}
};

/*
So, we are saying:
Our variable is going to be called currentState, and it checks the data state attribute of the heading class/var.
If the variable is currently active, change it to inactive.
If the variable is inactive, set it to active.
*/

theButton.on('click', buttonCLickHandler);