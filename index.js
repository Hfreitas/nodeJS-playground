const inquirer = require('inquirer');

function VALIDATE_NUMBER(input) {
  const parsedInput = parseFloat(input);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  const checkInput =
    (!isNaN(parsedInput) &&
      Number.isInteger(parsedInput) &&
      parsedInput >= 0) ||
    'Digite um número maior que 0 ou um valor válido';
  return checkInput;
}

const FIBONACCI = (n) => {
  // https://stackoverflow.com/questions/51111870/fibonacci-series-in-javascript
  const result = [0, 1];
  for (var i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
};

const READ_DATA = async () => {
  // https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
  const answer = await inquirer.prompt([
    {
      name: 'number',
      type: 'input',
      message: 'Digite um número inteiro ',
      validate: VALIDATE_NUMBER,
    },
  ]);
  return console.log(FIBONACCI(parseInt(answer.number, 10)));
};

READ_DATA();
