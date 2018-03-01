const fs = require('fs');
const FileManager = require('./file-manager');

const path = 'file.txt';
FileManager.write(path, 'test !').then(() => {
  FileManager.read(path).then(data => {
    console.log(data);
  });
});
