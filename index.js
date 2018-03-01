const fs = require('fs');
const FileManager = require('./file-manager');
const Ride = require('./ride');
const out = require('./generate-output');

const pathExemple = 'qualification-round/a_example';
const pathB = 'qualification-round/b_should_be_easy';
const pathC = 'qualification-round/c_no_hurry';
const pathD = 'qualification-round/d_metropolis';
const pathE = 'qualification-round/e_high_bonus';

// FileManager.read(pathExemple+".in").then(data => {
// out (printRides(data),pathExemple)
// });
// FileManager.read(pathB+".in").then(data => {
// out (printRides(data),pathB)
// });
// FileManager.read(pathC+".in").then(data => {
// out (printRides(data),pathC)
// });
 FileManager.read(pathD+".in").then(data => {
 out (printRides(data),pathD)
 });
// FileManager.read(pathE+".in").then(data => {
// out (printRides(data),pathE)
// });


function printRides(data){
	const strFile = data.toString("utf8")
	const lines = strFile.split("\n")
	const header =readHeader(lines[0]);
	console.log(header)
	const vehicles = [];
	for (let i = 0; i < header.vehicles; ++i ) {
		vehicles.push(vehicle ())
	}
	let ride = 0
    for(let i=1 ;i < lines.length-1; i++){

    	const ride= readRide(lines[i])
    	const selCar = getBestCar(ride,vehicles,header.bonus)
    	if(selCar){
    		var car = vehicles[selCar.carNumber] 
        	car.x=ride.to[0]
        	car.y=ride.to[1]
        	car.nbRides++
        	car.rides.push((i-1))
        	car.stepRunning= selCar.dist
        	vehicles[selCar.carNumber] = car
    	}
    	// console.log(vehicles)
    	// let rideDist= HoHpP;
    	
    }
	
	return vehicles;
	
	
}

function getBestCar(ride ,vehicles, maxbonus){
	const rideDist=ride.distance()
	const maxDist = ride.finish - ride.start
	let bestcar=0;
	let selectedCar;
	let carCounter =0;
	let bestDist = maxDist
	vehicles.forEach(vehicle => {
		const distToVehicle= calcDist(ride.from[0],ride.from[1], vehicle.x, vehicle.y,)
		
		 if(/* (distToVehicle+rideDist) < maxDist && */ distToVehicle < bestDist ) {
			bestDist=distToVehicle
			selectedCar={carNumber:carCounter,dist:(distToVehicle+rideDist)}
		 }
		carCounter++
	})
	return selectedCar
	
}

function readHeader(line){
	const datas=line.split(" ");
	return {rows : parseInt(datas[0],10), columns : parseInt(datas[1],10), vehicles : parseInt(datas[2],10), rides : parseInt(datas[3],10), bonus : parseInt(datas[4],10), steps : parseInt(datas[5],10)}
}

function readRide(line){
	const datas=line.split(" ");
	return new Ride(datas)
}

function calcDist(a,b,x,y) {
	return Math.abs(a - x) + Math.abs(b - y)
}

function vehicle (){
	return {x:0, y:0, nbRides:0, stepRunning: 0, rides :[]}
}



