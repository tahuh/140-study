var globalVariable = 10;

function addGlobalVariable20() {
	globalVariable += 20;
}

function getGlobalVariable() {
	return globalVariable;
}

var addGlobalVariableToLocalVariable() {
	var localVariable = 100;
	//globalVariable + localVariable;
}

localVariable += 20; // error

var someFunction(){
	var myLocal = 20;
	return myLocal + localVariable; // error
}

