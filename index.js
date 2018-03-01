const fs = require("fs");

function writeFile(filename, content) {
  fs.writeFile(filename, content, err => {
    if (err) {
      console.log("writeFile error: " + err);
      throw err;
    }
  });
}

function readFile(filename) {
  return new Promise((resolve, reject) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.log("readFile error: " + err);
      throw err;
    }
    return new Promise(data.toString("utf8");
  });
  })
}

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