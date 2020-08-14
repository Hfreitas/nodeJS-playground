const fs = require('fs');

// readFileSync é um método síncrono
const archiveName = 'myMarvelous.txt';

try {
  const data = fs.readFileSync(archiveName, 'utf-8');
  console.log(data);
} catch (error) {
  console.error(`Erro ao ler o arquivo: ${error.path}`);
  console.log(error);
}
