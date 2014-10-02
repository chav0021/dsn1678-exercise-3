//alert('is it working?');

/*
	alert() is a function that is defined by the browser.
	 A function is a reusable piece of code.
	 We know it's a function because it's a word that is followed by round brackets, i.e function()
*/

var personsName = prompt('What should we call you?');

/*
A variable is a container to hold anything we want. In this case, we are saying: personsName is going to hold the information captured by the prompt function. 
*/

console.log(personsName);
 
/*
 console.log() is a debugging tool for us. It will ouput anything we want in to the Web Inspector's Console. Only a temporary tool to make sure things are working.s
 */

var counter = 0

/*
This counter variable is used to track how many times the loop has occured.
*/

for(counter = 0; counter < 10; counter++) {
	document.write('<h2>' + personsName + '</h2>');
}

/*
document.write is a really easy way to write to the bottom of the HTML document. However, it gives us no control over where to put the text.
*/

if(personsName == 'Daniela') {
   alert('Holy shit, your name is awesome!')
} else {
	alert('Must suck to be you')
}


/*
	Two equals means compare. One equals means 'set to'.
*/

