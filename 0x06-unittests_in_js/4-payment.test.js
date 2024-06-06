import sinon from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  it('the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtils.restore();
    spyConsole.restore();
  });
});
