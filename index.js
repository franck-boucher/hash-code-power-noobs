const fs = require('fs');
const FileManager = require('./file-manager');

const path = 'qualification-round/b_should_be_easy.in';
FileManager.write(path+".out", 'test !').then(() => {
  FileManager.read(path).then(data => {
	  printLines(data)
  });
});

function printLines(data){
	const strFile = data.toString("utf8")
	const lines = strFile.split("\n")
	const header =readHeader(lines[0]);
	console.log(header)
	const vehicles = [];
	for (let i in header.vehicles) {
		vehicles.push(vehicle ())
	}
	let ride = 0
    for(let i in lines){
	  console.log(lines[i])
    }
}

function readHeader(line){
	const datas=line.split(" ");
	return {rows : datas[0], columns : datas[1], vehicles : datas[2], rides : datas[3], bonus : datas[4], steps : datas[5]}
}

function calcDist(a,b,x,y) {
	return (a - x) + (b - y)
}

function vehicle (){
	return {x:0, y:0}
}



