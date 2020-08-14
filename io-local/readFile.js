const fs = require('fs');

// readFile é um método assíncrono, recebe o arquivo a ser lido, string/encoding e uma callback node-style(recebe error, result);

const archiveName = 'myMarvelous.txt';

fs.readFile(archiveName, (error, data) => {
  if (error) {
    console.error(
      `Não foi possível ler o arquivo ${archiveName}\n Erro: ${error.message}`,
    );
    return;
  }
  console.log(`Sucesso! Conteúdo do arquivo: ${data.toString('utf-8')}`);
});
