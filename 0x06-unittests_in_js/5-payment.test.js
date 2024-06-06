const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('5-hooks', () => {
  let spyConsole;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyConsole.restore();
  });

  it('testing sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('testing sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
