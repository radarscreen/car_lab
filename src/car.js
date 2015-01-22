function Car(make, model, year, color, state){
	this.make = make;
	this.model = model;
	this.year = 2014;
	this.state = "off";
	this.color = color;
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function() {
	this.state = "on";
}
Car.prototype.off = function() {
	this.state = "off";
}

Car.prototype.pick_up = function(name) {
	
	if(this.state==="on") {
	console.log("Driving to pick up " + name);
	this.passengers.push(name);
}
};

Car.prototype.dropOff = function(name) {
	if(this.state==="on") {
		if(this.passengers.indexOf(name) !== -1) {
			this.passengers.pop(name);
		}
	}
}



module.exports=Car;