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

  console.log(data.toString("utf8"));
});
