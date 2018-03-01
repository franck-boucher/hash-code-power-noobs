const fs = require('fs');

//Write file
fs.writeFile('file.txt', 'coucou', err => {
  if (err) {
    throw err;
  }
});

fs.readFile('./exemple-pizza/small.in', (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
});
