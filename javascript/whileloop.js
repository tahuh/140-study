var cars = ["Ford". "BMW", "Mercedes", "Ferari", "Lamborghini", "Koenigsegg","Bugatti"]
var text = "";
var i = 0;
while(i < 7){
	text += cars[i] + "<br>"
	i++;
}

// using array's length method
var text = "";
while(i < cars.length){
	text += cars[i] + "<br>"
	i++;
}
