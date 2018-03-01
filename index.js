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

writeFile("./exemple-pizza/file.txt", "coucou");
const content = readFile("./exemple-pizza/big.in");
console.log(content);
