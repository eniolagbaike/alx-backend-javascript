const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const expect = require('chai').expect;

describe("sendPaymentRequestToApi", function() {
    this.beforeEach("Set up spy to use for each test", function () {
        sinon.spy(console, "log");
    });
    afterEach("Restore spy after each test", function () {
        console.log.restore();
    });
    it("should log correct output for calculateNumber('SUM', 100, 20)", function() {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.calledOnceWithExactly("The total is: 120")).to.be.true;
        expect(console.log.calledOnce).to.be.true;
    });
    it("check that console.log is called with the right args", function() {
        sendPaymentRequestToApi(10, 10);
        expect(console.log.calledOnceWithExactly("The total is: 20")).to.be.true;
        expect(console.log.calledOnce).to.be.true;
    }
    );
});