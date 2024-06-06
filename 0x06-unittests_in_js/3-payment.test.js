import sinon from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  it('the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
