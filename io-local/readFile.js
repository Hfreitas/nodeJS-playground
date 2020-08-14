const fs = require('fs');
const { rejects } = require('assert');

// readFile é um método assíncrono, recebe o arquivo a ser lido, string/encoding e uma callback node-style(recebe error, result);

function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, content) => {
      return err ? reject(error) : resolve(content);
    });
  });
}

export default readFilePromise;
