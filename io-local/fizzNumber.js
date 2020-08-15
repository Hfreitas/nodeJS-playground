module.exports = async (x, y, z) => {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number')
      return reject(new Error('Jovem, apenas números, por favor...'));
    return resolve(x + y);
  }).then((sum) => {
    sum * z <= 50
      ? Promise.reject(new Error('Vamos melhorar os parâmetros'))
      : Promise.resolve(sum * z);
  });
};
