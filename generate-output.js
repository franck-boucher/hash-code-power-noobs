const FileManager = require('./file-manager');

module.exports = vehicles => {
  let result = '';
  vehicles.forEach(v => {
    let rides = '';
    v.rides.forEach(r => {
      rides += `${r} `;
    });

    result += `${rides.length} ${rides}\n`;
  });

  FileManager.write('./out', result);
};
