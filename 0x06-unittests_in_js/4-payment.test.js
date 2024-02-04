const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    let spyConsole;
    beforeEach(() => {
        spyConsole = sinon.spy(console, 'log');
    });
    afterEach(() => {
        spyConsole.restore();
    });
    it('validate the usage of the Utils function', () => {
        const stubUtils = sinon.stub(Utils, 'calculateNumber');
        stubUtils.withArgs('SUM', 100, 20).returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
        stubUtils.restore();
    });
});