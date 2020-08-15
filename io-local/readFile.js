const fs = require('fs');

// readFile é um método assíncrono, recebe o arquivo a ser lido, string/encoding e uma callback node-style(recebe error, result);

module.exports = function (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, content) => {
      return error ? reject(error) : resolve(content);
    });
  });
}
