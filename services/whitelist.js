const { Whitelist } = require('models');
const  { ValidationError } = require('utils/errors');
const HttpStatus = require('http-status-codes');
const { findMissingFields } = require('utils/validations');

const verifyPermission = (req) => {
  const { userId } = req.params;
  return Whitelist.findOne({userId: userId})
    .then((result) => result);
};

const insertNewRecord = (req) => {
  const newUser = req.body || {};
  const requiredFields = [ 'userId', 'data' ];
  const missingFields = findMissingFields(newUser, requiredFields);
  if (missingFields && missingFields.length) {
    return Promise.reject(new ValidationError(`Some fields are missing or are invalid! Please check ${missingFields.toString()}`), HttpStatus.PRECONDITION_FAILED);
  }
  return Whitelist.create(newUser).then((result) => result);
};

const removeUser = (req) => {
  const { userId } = req.params;
  const options = { userId };
  return Whitelist.deleteOne(options)
    .then((result) => result.n > 0 ? true : false);
};

module.exports = {
  insertNewRecord,
  removeUser,
  verifyPermission,
}