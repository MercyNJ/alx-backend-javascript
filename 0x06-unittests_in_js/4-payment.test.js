const { describe, it } = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('validates the usage of Utils.calculateNumber with sinon.stub', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.equal(true);

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
