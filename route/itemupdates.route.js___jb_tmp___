module.exports = function(app) {

    const itemupdates = require('../controller/itemupdate.controller.js');


    app.post('/api/itemupdates', itemupdates.create);


    app.get('/api/itemupdates', itemupdates.findAll);


    app.get('/api/itemupdates/:itemId', itemupdates.findById);


    app.put('/api/itemupdates', itemupdates.update);



}
