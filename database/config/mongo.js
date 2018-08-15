const createConnection = (credentials) => {
  const mongoose = require('mongoose');
  
  mongoose.Promise = Promise;

  const connection = mongoose.createConnection('mongodb://bb:1q2w3e4r@localhost:27017/dbteste', {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 5,
    authSource: 'admin',
    useNewUrlParser: true,
  })
  .on('error', (args) => {
    console.log(`Unable to connect to the database MONGODB`, args);
  })
  .on('open', () => {
    console.log(`Connection to MONGODB has been established successfully.`);
  });

  connection.mongoose = mongoose;

  return connection;
}

module.exports = exports = {
  createConnection,
};