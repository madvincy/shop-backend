module.exports = function(app) {

    const orders = require('../controller/order.controller.js');


    app.post('/api/orders', orders.create);


    app.get('/api/orders', orders.findAll);


    app.get('/api/orders/:orderId', orders.findById);


    app.put('/api/orders', orders.update);




    app.delete('/api/orders/:orderId', orders.delete);
}
