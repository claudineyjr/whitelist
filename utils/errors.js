const HttpCodes = require('http-status-codes');

function ValidationError(message, httpCode = HttpCodes.BAD_REQUEST) {
  this.name = 'ValidationError';
  this.message = (message || '');
  this.httpCode = httpCode;
}

ValidationError.prototype = Error.prototype;

module.exports = {
  ValidationError
};
