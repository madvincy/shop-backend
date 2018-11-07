module.exports = function(app) {

    const items = require('../controller/item.controller.js');


    app.post('/api/items', items.create);


    app.get('/api/items', items.findAll);


    app.get('/api/items/:itemId', items.findById);


    app.put('/api/items', items.update);


    app.delete('/api/items/:itemId', items.delete);
}
