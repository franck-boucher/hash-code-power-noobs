const fs = require('fs');
const FileManager = require('./file-manager');

const path = 'file.txt';
FileManager.write(path, 'test !').then(() => {
  FileManager.read(path).then(data => {
    console.log(data);
  });

function printLines(data){
	const strFile = data.toString("utf8")
	  const lines = strFile.split("\n")
	  for(var i in lines){
		  console.log(lines[i])
	  }
}

function calcDist(a,b,x,y){
	return (a - x) + (b - y)
}