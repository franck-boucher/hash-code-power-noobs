const fs = require("fs");

// Write file
fs.writeFile("./exemple-pizza/file.txt", "coucou", err => {
  if (err) {
    throw err;
  }
});

fs.readFile("./exemple-pizza/big.in", (err, data) => {
  if (err) {
    throw err;
  }

  printLines(data)
});

function printLines(data){
	const strFile = data.toString("utf8")
	  const lines = strFile.split("\n")
	  for(var i in lines){
		  console.log(lines[i])
	  }
}