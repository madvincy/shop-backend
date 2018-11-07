const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');

});

require('./route/customer.route.js')(app);
require('./route/item.route.js')(app);
require('./route/itemupdates.route.js')(app);
require('./route/order.route.js')(app);
require('./route/ordereditem.route.js')(app);


// Create a Server
const server = app.listen(8070, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})


















