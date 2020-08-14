const readFile = require('./io-local/readFile');

const marvel = './io-local/myMarvelous.txt';
const otaku = './io-local/myOtaku.txt';
const coach = './io-local/myCoach.txt';

Promise.all([readFile(marvel), readFile(otaku), readFile(coach)])
  .then(([marvel, otaku, coach]) => {
    const fileSizeSum = marvel.byteLength + otaku.byteLength + coach.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((error) => {
    console.error(`Erro ao ler arquivos: ${error.message}`);
  });
