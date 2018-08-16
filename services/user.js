const { User } = require('models');
const  { ValidationError } = require('utils/errors');
const HttpStatus = require('http-status-codes');
const { findMissingFields } = require('utils/validations');

const getUser = (userId) => {
  const method = userId ? 'findOne' : 'find';
  const options = userId ? { userId } : undefined;
  return User[method](options)
    .then((result) => result);
};

const insertNewRecord = (newUser = {}) => {
  const requiredFields = [ 'userId', 'data' ];
  const missingFields = findMissingFields(newUser, requiredFields);
  if (missingFields && missingFields.length) {
    return Promise.reject(new ValidationError(`Some fields are missing or are invalid! Please check ${missingFields.toString()}`), HttpStatus.PRECONDITION_FAILED);
  }
  return User.create(newUser).then((result) => result);
};

const removeUser = (userId) => {
  const options = { userId };
  return User.deleteOne(options)
    .then((result) => result.n > 0 ? true : false);
};

module.exports = {
  insertNewRecord,
  removeUser,
  getUser,
}