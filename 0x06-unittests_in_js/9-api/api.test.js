const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Express Routes', () => {
  describe('GET /', () => {
    it('should return Welcome to the payment system', (done) => {
      request.get(`${baseUrl}/`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return Payment methods for cart 123', (done) => {
      request.get(`${baseUrl}/cart/123`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return Payment methods for cart 456', (done) => {
      request.get(`${baseUrl}/cart/456`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 456');
        done();
      });
    });

    it('should return 404 Not Found for invalid cart id', (done) => {
      request.get(`${baseUrl}/cart/abc`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
