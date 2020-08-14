const fs = require('fs');
const util = require('util');

// transforma o parametro numa promise
const writeFile = util.promisify(fs.writeFile);

const text = `123..testando`;

async function writingFiles() {
  await writeFile('./empty.txt', text, { flag: 'wx' }, (error) => {
    // A flag wx abre o arquivo para escrita caso ele não exista
  /*
    Flag =>
      w: write
      x: exclusive
  */
  // Se o arquivo existir, um erro é retornado
    if (error) throw error;
    console.log('OK');
  });
}

writingFiles();
