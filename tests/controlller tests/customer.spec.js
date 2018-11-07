process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const should = chai.should();

const customers = require('../data/customer.json');

const base = 'http://localhost:8070';

describe('customer controller', () => {

  // describe.skip('when not stubbed', () => {
  //   describe('GET /api/customers', () => {
  //     it('should return all customers', (done) => {
  //       request.get(`${base}/api/customers`, (err, res, body) => {
  //         // there should be a 200 status code
  //         res.statusCode.should.eql(200);
  //         // the response should be JSON
  //         res.headers['content-type'].should.contain('application/json');
  //         // parse response body
  //         body = JSON.parse(body);
  //         // the JSON response body should have a
  //         // key-value pair of {"status": "success"}
  //         body.status.should.eql('success');
  //         // the JSON response body should have a
  //         // key-value pair of {"data": [3 customer objects]}
  //         body.data.length.should.eql(3);
  //         // the first object in the data array should
  //         // have the right keys
  //         body.data[0].should.include.keys(
  //            'cust_name', 'phone_no',
  //         );
  //         // the first object should have the right value for name
  //         body.data[0].cust_name.should.eql('sam');
  //         done();
  //       });
  //     });
  //   });
  //   describe('GET /api/customers/:id', () => {
  //     it('should respond with a single customer', (done) => {
  //       request.get(`${base}/api/customers/4`, (err, res, body) => {
  //         res.statusCode.should.equal(200);
  //         res.headers['content-type'].should.contain('application/json');
  //         body = JSON.parse(body);
  //         body.status.should.eql('success');
  //         body.data[0].should.include.keys(
  //           'cust_name', 'phone_no',
  //         );
  //         body.data[0].cust_name.should.eql('sam');
  //         done();
  //       });
  //     });
  //     it('should throw an error if the customer does not exist', (done) => {
  //       request.get(`${base}/api/customers999`, (err, res, body) => {
  //         res.statusCode.should.equal(404);
  //         res.headers['content-type'].should.contain('application/json');
  //         body = JSON.parse(body);
  //         body.status.should.eql('error');
  //         body.message.should.eql('That customer does not exist.');
  //         done();
  //       });
  //     });
  //   });
  //   describe('POST /api/customers', () => {
  //     it('should return the customer that was added', (done) => {
  //       const options = {
  //         method: 'post',
  //         body: {
  //           cust_name: 'sam',           
  //           phone_no: 70000000
            
  //         },
  //         json: true,
  //         url: `${base}/api/customers`
  //       };
  //       request(options, (err, res, body) => {
  //         res.statusCode.should.equal(201);
  //         res.headers['content-type'].should.contain('application/json');
  //         body.status.should.eql('success');
  //         body.data[0].should.include.keys(
  //           'id','cust_name', 'phone_no',
  //         );
  //         done();
  //       });
  //     });
  //   });
  // });

  describe('when stubbed', () => {

    beforeEach(() => {
      this.get = sinon.stub(request, 'get');
      this.post = sinon.stub(request, 'post');
      this.put = sinon.stub(request, 'put');
      this.delete = sinon.stub(request, 'delete');
    });

    afterEach(() => {
      request.get.restore();
      request.post.restore();
      request.put.restore();
      request.delete.restore();
    });

    describe('GET /api/customers', () => {
      it('should return all customers', (done) => {
        this.get.yields(
          null, customers.all.success.res, JSON.stringify(customers.all.success.body)
        );
        request.get(`${base}/api/customers`, (err, res, body) => {
          // there should be a 200 status code
          res.statusCode.should.eql(200);
          // the response should be JSON
          res.headers['content-type'].should.contain('application/json');
          // parse response body
          body = JSON.parse(body);
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          body.status.should.eql('success');
          // the JSON response body should have a
          // key-value pair of {"data": [3 customer objects]}
          body.data.length.should.eql(2);
          // the first object in the data array should
          // have the right keys
          body.data[0].should.include.keys(
           'id', 'cust_name', 'phone_no',
          );
          // the first object should have the right value for name
          body.data[0].name.should.eql('The Land Before Time');
          done();
        });
      });
    });
    describe('GET /api/customers:id', () => {
      it('should respond with a single customer', (done) => {
        const obj = customers.single.success;
        this.get.yields(null, obj.res, JSON.stringify(obj.body));
        request.get(`${base}/api/customers4`, (err, res, body) => {
          res.statusCode.should.equal(200);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('success');
          body.data[0].should.include.keys(
            'id', 'cust_name', 'phone_no',
          );
          body.data[0].name.should.eql('The Land Before Time');
          done();
        });
      });
      it('should throw an error if the customer does not exist', (done) => {
        const obj = customers.single.failure;
        this.get.yields(null, obj.res, JSON.stringify(obj.body));
        request.get(`${base}/api/customers/999`, (err, res, body) => {
          res.statusCode.should.equal(404);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('error');
          body.message.should.eql('That customer does not exist.');
          done();
        });
      });
    });
    describe('POST /api/v1/customers', () => {
      it('should return the customer that was added', (done) => {
        const options = {
          body: {
            cust_name: 'sam',
            phone_no: '70000000'
            
          },
          json: true,
          url: `${base}/api/customers/`
        };
        const obj = customers.add.success;
        this.post.yields(null, obj.res, JSON.stringify(obj.body));
        request.post(options, (err, res, body) => {
          res.statusCode.should.equal(201);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('success');
          body.data[0].should.include.keys(
            'id', 'cust_name', 'phone_no',
          );
          body.data[0].name.should.eql('Titanic');
          done();
        });
      });
      it('should throw an error if the payload is malformed', (done) => {
        const options = {
          body: { name: 'Titanic' },
          json: true,
          url: `${base}/api/v1/customers`
        };
        const obj = customers.add.failure;
        this.post.yields(null, obj.res, JSON.stringify(obj.body));
        request.post(options, (err, res, body) => {
          res.statusCode.should.equal(400);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('error');
          should.exist(body.message);
          done();
        });
      });
    });
    describe('PUT /api/customers', () => {
      it('should return the customer that was updated', (done) => {
        const options = {
          body: { phone_no: 70000000 },
          json: true,
          url: `${base}/api/customers/1`
        };
        const obj = customers.update.success;
        this.put.yields(null, obj.res, JSON.stringify(obj.body));
        request.put(options, (err, res, body) => {
          res.statusCode.should.equal(200);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('success');
          body.data[0].should.include.keys(
            'id', 'cust_name', 'phone_no',
          );
          body.data[0].cust_name.should.eql('sam');
          body.data[0].phone_no.should.eql(70000000);
          done();
        });
      });
      it('should throw an error if the customer does not exist', (done) => {
        const options = {
          body: { phone_no: 700000 },
          json: true,
          url: `${base}/api/customers/1`
        };
        const obj = customers.update.failure;
        this.put.yields(null, obj.res, JSON.stringify(obj.body));
        request.put(options, (err, res, body) => {
          res.statusCode.should.equal(404);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('error');
          body.message.should.eql('That customer does not exist.');
          done();
        });
      });
    });
    describe('DELETE /api/customers/:id', () => {
      it('should return the customer that was deleted', (done) => {
        const obj = customers.delete.success;
        this.delete.yields(null, obj.res, JSON.stringify(obj.body));
        request.delete(`${base}/api/customers/1`, (err, res, body) => {
          res.statusCode.should.equal(200);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('success');
          body.data[0].should.include.keys(
            'id', 'cust_name', 'phone_no',
          );
          body.data[0].cust_name.should.eql('sam');
          done();
        });
      });
      it('should throw an error if the customer does not exist', (done) => {
        const obj = customers.delete.failure;
        this.delete.yields(null, obj.res, JSON.stringify(obj.body));
        request.delete(`${base}/api/customers/1`, (err, res, body) => {
          res.statusCode.should.equal(404);
          res.headers['content-type'].should.contain('application/json');
          body = JSON.parse(body);
          body.status.should.eql('error');
          body.message.should.eql('That customer does not exist.');
          done();
        });
      });
    });

  });

});