module.exports = function(app) {

    const ordereditems = require('../controller/ordereditem.controller.js');


    app.post('/api/ordereditems', ordereditems.create);


    app.get('/api/ordereditems', ordereditems.findAll);

}
