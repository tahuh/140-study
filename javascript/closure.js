/*
 * dealing with closures in javascript
 * closure is very important when writing javascript code
 * jQuery, nodejs extensively use this closure so must get
 * used to this concept.
 */

// Here is a situation
// Suppose you want to use a variable called "counter" to store
// inforamation about hot many times event is occurred
// such as button clicks
// Natural way to think about this is...

var counter = 0;

function countup() {
	counter += 1;
}

// But the above code has some problem.
// By the HTML definition, every function in the same HTML page can access to that variable
// So it might change unintentionally
// What if we only want update variable counter only in certain function?

// HERE COMES CLOSURE

// Simple closure example
// we know thant JavaScript can return everything as return value including "function"
// we utilzie this

// the general function we use below
function personInfo(name, university) {
	var text = "Your name is " + name + ", and you go to " + university;
	return text;
}

// now we tweak this
function personInfoWithClosure(name, univ) {
	var text = "Your name is ";
	function makeInfo(){
		return text + name + ", and school you go to " + univ;
	}
	return makeInfo();
}

personInfoWithClosure("Thomas", "Yonsei") // Your name is Thomas, and school you go is Yonsei

/*
Explanation

when we invoke personInfoWithClosure the below pathway is invoked
personInfoWithClosure("Thomas", "Yonsei") 
-> local variable called "text" inside function personInfoWithClosure is created
-> string "Your name is " is assigned to text
-> function name called makeInfo is generated

//// KEY CONCEPT

-> by scope rule, function can access variable outside
-> This ENABLES makeInfo function to access variable text and name and univ parameters

//// END KEY CONCEPT

-> the generated makeInfo is returned as invoked fashion i.e. not makeInfu but makeInfo() is returned
-> So when we return, invoked makeInfo function will search for text, name and univ parameters in global scope
-> Then generates string using those and return generated string

*/

// we can also do that like this
function personInfoWithClosure2(name){
	var text = "Your name is ";
	function assignUniversity(univ){
		return text + name + ", and goes to school " + univ;
	}
	return assignUniversity;
}

var info = personInfoWithClosure2("Thomas");
info("Yonsei") // Your name is Thomas, and school you go is Yonsei

/*

Explanation
This case is quite differ from above
The biggest difference is it returned not-invoked function
So one can invoke the function assignUniversity defined inside function personInfoWithClosure2

Why we do this?
To hide information from other scopes etc.

 */

// Moving back to our problem with counter
// now we can design a function with closure like below
function add() {
	var counter = 0;
	function empty() {
		counter += 1;
		return counter;
	}
	return empty();
}

// Or using self-invoking function
var add = (function(){
	var counter = 0;
	return function() {
		counter += 1;
		return counter;
	}
})();
