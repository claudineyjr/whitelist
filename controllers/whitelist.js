const service = require('services/whitelist');
const { responseJson, responseErrorJson } = require('utils/controllers');
const HttpStatus = require('http-status-codes');

const verifyPermission = (req, res) => {
  service.verifyPermission(req)
    .then((result) => {
      if (!result) {
        responseJson(res, result, HttpStatus.NO_CONTENT);
      }
      responseJson(res, result);
    })
    .catch((error) => responseErrorJson(res, 'verifyPermission::get', error));
};

const insertNewRecord = (req, res) => {
  service.insertNewRecord(req)
    .then((result) => {
      responseJson(res, result);
    })
    .catch((error) => responseErrorJson(res, 'insertNewRecord::post', error));
}

const removeUser = (req, res) => {
  service.removeUser(req)
    .then((result) => {
      if (!result) {
        responseJson(res, null, HttpStatus.NO_CONTENT);
      }
      responseJson(res, result);
    })
    .catch((error) => responseErrorJson(res, 'deleteUser::delete', error));
}

module.exports = {
  insertNewRecord,
  removeUser,
  verifyPermission, 
}