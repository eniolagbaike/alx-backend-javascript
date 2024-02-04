const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('returns the right token', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.eql({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => done(error));
    });
});