const inquirer = require('inquirer');

function VALIDATE_NUMBER(input) {
  const parsedInput = parseFloat(input);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  const checkInput = !isNaN(parsedInput) || 'Digite um valor válido';
  return checkInput;
}

const IMC_CALC = (height, weight) =>
  Math.abs(weight / Math.pow(height, 2)).toFixed(2);

const IMC_AVALIATOR = (imc) => {
  // https://stackoverflow.com/questions/2696436/switch-case-with-conditions
  switch (true) {
    case imc < 18.5:
      return `${imc} - Abaixo do peso (magreza)`;
    case imc >= 18.5 && imc <= 24.99:
      return `${imc} - Peso normal`;
    case imc >= 25 && imc <= 29.99:
      return `${imc} - Acima do peso (sobrepeso)`;
    case imc >= 30 && imc <= 34.99:
      return `${imc} - Obesidade grau I`;
    case imc >= 35 && imc <= 39.99:
      return `${imc} - Obesidade grau II`;
    default:
      return `${imc} - Obesidade graus III e IV`;
  }
};

const READ_DATA = async () => {
  // https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
  const answers = await inquirer.prompt([
    {
      name: 'height',
      type: 'input',
      message: 'Digite sua altura (com duas casas decimais): ',
      validate: VALIDATE_NUMBER,
    },
    {
      name: 'weight',
      type: 'input',
      message: 'Digite seu peso (com duas casa decimais): ',
      validate: VALIDATE_NUMBER,
    },
  ]);
  try {
    return console.log(
      IMC_AVALIATOR(
        IMC_CALC(parseFloat(answers.height), parseFloat(answers.weight)),
      ),
    );
  } catch {
    return console.log('Digite um valor válido');
  }
};

READ_DATA();
