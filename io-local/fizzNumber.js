// Adaptei desta solução https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7

const parseParams = (...params) => {
  const arrayParams = params.reduce((acc, param) => {
    isNaN(param) ? (acc[param] = parseInt(param, 10)) : (acc[param] = param);
    return acc;
  }, {});
  return arrayParams;
};

module.exports = async (x, y, z) => {
  const data = parseParams(x, y, z);
  return new Promise((resolve, reject) => {
    if (
      isNaN(data[x]) ||
      isNaN(data[y]) ||
      isNaN(data[z])
    )
      return reject(new Error('Jovem, apenas números, por favor...'));
    return resolve(x + y);
  }).then((sum) => {
    return sum * z <= 50
      ? Promise.reject(new Error('Vamos elevar esses parâmetros, jovem?'))
      : Promise.resolve(sum * z);
  });
};
