const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  it('validates the usage of Utils.calculateNumber with sinon.stub', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(consoleLogSpy.withArgs('The total is: 10').calledOnce);
    assert(calculateNumberStub.withArgs('SUM', 100, 20).calledOnce);


    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
