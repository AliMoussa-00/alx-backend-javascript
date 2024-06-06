import Utils from './utils.js';

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  console.log(
    `The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`,
  );
};

export default sendPaymentRequestToApi;
