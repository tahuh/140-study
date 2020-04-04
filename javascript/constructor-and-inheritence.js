/*
 * In this script we will learn about what is "Constructor"
 */


// Constructor is a "FUNCTION" that "HELPS CREATEING" and "OBJECT"

// In many object-oriented programming, there is a some concept called "class"
// including C++/Java/Python etc.

// How to make a Constructor??

// Simple rule "starts with CAPITAL letter !!!"

function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.drive = function() {
    console.log(this.name + " runs at " + this.speed + " mph")
};

var ggoma = new Vehicle("Ggoma Jadongcha BoongBoong" , 100)

ggoma.drive() // Expects on console "Ggoma Jadongcha BoongBoong runs at 100 mph"

// Heritence
// the constructor Sedan below will inherit default property of Vehicle

function Sedan(name, speed, maxSpeed) {
    Vehicle.apply(this, arguments);
    this.maxSpeed = maxSpeed;
}

Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function() {
    console.log(this.name + " boost its speed at " + this.maxSpeed);
};

var bmw = new Sedan("BMW7" , 100, 200)
bmw.drive()
bmw.boost()

// Or one can use class keyword + extends to run exactly same thing above (from ES6)
// Lets do this way

class Car2 {
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
	}
	drive() {
		console.log(this.name + " runs at " + this.speed + " mph")
	}
}

class Sedan2 extends Car2 {
	constructor(name,speed, maxSpeed) {
		super(name,speed);
		this.maxSpeed = maxSpeed;
	}
	boost() {
		console.log(this.name + " boost its speed at " + this.maxSpeed);
	}
}

var bmw2 = new Sedan2("BMW7" , 100, 200)
bmw2.drive()
bmw2.boost()