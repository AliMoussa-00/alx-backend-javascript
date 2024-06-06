import { expect } from 'chai';
import getPaymentTokenFromAPI from './6-payment_token.js';

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: 'Successful response from the API',
        });
        done();
      })
      .catch(done); // If there's an error, pass it to done to fail the test
  });
});
