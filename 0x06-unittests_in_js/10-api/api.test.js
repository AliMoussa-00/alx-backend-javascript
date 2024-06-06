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

  describe('GET /available_payments', () => {
    it('should return available payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const parsedBody = JSON.parse(body);
        expect(parsedBody.payment_methods.credit_cards).to.be.true;
        expect(parsedBody.payment_methods.paypal).to.be.false;
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with username', (done) => {
      const userName = 'testUser';
      request.post(
        {
          url: `${baseUrl}/login`,
          json: true, // Set json option to true to send/receive JSON data
          body: { userName }, // Send JSON body
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal(`Welcome ${userName}`);
          done();
        },
      );
    });
  });
});
