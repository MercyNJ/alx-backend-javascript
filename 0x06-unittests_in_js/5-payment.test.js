const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
// const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('logs the correct string for totalAmount 100 and totalShipping 20', () => {
    sendPaymentRequestToApi(100, 20);

    // expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.equal(true);
  });

  it('logs the correct string for totalAmount 10 and totalShipping 10', () => {
    sendPaymentRequestToApi(10, 10);

    // expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.equal(true);
  });
});
