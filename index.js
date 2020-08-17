const inquirer = require('inquirer');
const fizzNumber = require('./io-local/fizzNumber');

const READ_DATA = async () => {
  const answers = await inquirer.prompt([
    {
      name: 'param_1',
      type: 'number',
      message: 'Digite o primeiro número',
    },
    {
      name: 'param_2',
      type: 'number',
      message: 'Digite o segundo número',
    },
    {
      name: 'param_3',
      type: 'number',
      message: 'Digite o terceiro número',
    },
  ]);

  try {
    const result = await fizzNumber(
      answers.param_1,
      answers.param_2,
      answers.param_3,
    );
    console.log(result);
  } catch {
    const error = await fizzNumber(answers.param_1, answers.param_2, answers.param_3);
    console.log(error);
  }
};

// Tá quebrado...
READ_DATA();
