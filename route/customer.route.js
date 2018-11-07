module.exports = function(app) {
 
    const customers = require('../controller/customer.controller');
 
    // Create a new Customer
    app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:customerId', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/customers', customers.update);
    //general customers details

    app.get('/api/generaldetails', customers.generaldetails);

    app.get('/api/customerorders', customers.customerorders);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', customers.delete);
}