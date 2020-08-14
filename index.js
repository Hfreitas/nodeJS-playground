const inquirer = require('inquirer');

function VALIDATE_NUMBER(input) {
  const parsedInput = parseFloat(input);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  const checkInput =
    (!isNaN(parsedInput) && Number.isInteger(parsedInput)) ||
    'Digite um valor válido';
  return checkInput;
}

const FACTORIAL = (num) => {
  if (num < 0) return -1;
  if (num == 0) return 1;
  return num * FACTORIAL(num - 1);
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
  return console.log(
    FACTORIAL(answer.number)
  );
};

READ_DATA();
