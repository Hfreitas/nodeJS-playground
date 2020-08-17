module.exports = async (x, y, z) => {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number')
      return reject(new Error('Jovem, apenas números, por favor...'));
      console.log(typeof x)
    return resolve(x + y);
  }).then((sum) => {
    return sum * z <= 50
      ? Promise.reject(new Error('Vamos elevar esses parâmetros, jovem?'))
      : Promise.resolve(sum * z);
  });
};
