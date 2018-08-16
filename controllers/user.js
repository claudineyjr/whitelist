const service = require('services/user');
const { responseJson, responseErrorJson } = require('utils/controllers');
const HttpStatus = require('http-status-codes');

const getUser = (req, res) => {
  const { userId } = req.params;
  service.getUser(userId)
    .then((result) => {
      if (!result) {
        responseJson(res, result, HttpStatus.NOT_FOUND);
      }
      responseJson(res, result);
    })
    .catch((error) => responseErrorJson(res, 'getUser::get', error));
};

const insertNewRecord = (req, res) => {
  const newUser = req.body || {};
  service.insertNewRecord(newUser)
    .then((result) => {
      responseJson(res, result);
    })
    .catch((error) => responseErrorJson(res, 'insertNewRecord::post', error));
}

const removeUser = (req, res) => {
  const { userId } = req.params;
  service.removeUser(userId)
    .then((result) => {
      if (!result) {
        responseJson(res, null, HttpStatus.NOT_FOUND);
      }
      responseJson(res, result);
    })
    .catch((error) => responseErrorJson(res, 'deleteUser::delete', error));
}

module.exports = {
  insertNewRecord,
  removeUser,
  getUser, 
}