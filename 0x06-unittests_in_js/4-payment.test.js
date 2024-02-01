const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('validates the usage of Utils.calculateNumber with sinon.stub', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
