const Utils = require('./utils');

function sendPaymentRequestToApi(a, b) {
  const res = Utils.calculateNumber('SUM', a, b);
  console.log(`The total is: ${res}`);
  return res;
}

module.exports = sendPaymentRequestToApi;