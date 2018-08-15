const genericMiddleware = (req, res, next) => {
  console.log('testando hehehe');
  req.belongsToWhitelist = true;
  next();
};


const instanceMiddleware = (req, res, next) => {
  return promiseExample()
    .then(() => {
      console.log('inicializou');
      return genericMiddleware
    })
}

const promiseExample = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  })
}


module.exports = instanceMiddleware