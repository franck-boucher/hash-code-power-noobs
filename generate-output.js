const FileManager = require('./file-manager');

module.exports = (vehicles,path) => {
  let result = '';
  vehicles.forEach(v => {
    let rides = '';
    v.rides.forEach(r => {
      rides += `${r} `;
    });

    result += `${v.rides.length} ${rides}`.trim()+'\n';
  });

  FileManager.write(`./${path}.out`, result).then( () => console.log("success")).catch(er => console.log(er));
};
