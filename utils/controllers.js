'use strict';
const HttpStatus = require('http-status-codes');

const responseJson = (res, data, code = HttpStatus.OK) => {
  res.status(code);
  return res.json(data);
};

const responseErrorJson = (res, methodName, error, code = HttpStatus.INTERNAL_SERVER_ERROR) => {
  res.status(error.httpCode || code);
  return res.json({
    error: error.message || error.toString()
  });
};

module.exports = exports = {
  responseJson,
  responseErrorJson,
};
