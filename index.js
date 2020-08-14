const readFile = require('./io-local/readFile');

const marvel = './io-local/myMarvelous.txt';
const otaku = './io-local/myOtaku.txt';
const coach = './io-local/myCoach.txt';

readFile
  .readFilePromise(marvel)
  .then((content) => {
    console.log(`Lido arquivo 1 com ${content.byteLength} bytes`);
    return readFile.readFilePromise(otaku);
  })
  .then((content) => {
    console.log(`Lido arquivo 2 com ${content.byteLength} bytes`);
    return readFile.readFilePromise(coach);
  })
  .then((content) => {
    console.log(`Lido arquivo 3 com ${content.byteLength} bytes`);
  })
  .catch((error) => {
    console.log(`Erro ao ler arquivos: ${error.message}`);
  });
