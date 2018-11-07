const Ordereditem = require('../models').Ordereditem;

// Post an item
exports.create = (req, res) => {
	// Save to MySQL database
	let ordereditem = req.body;
	Ordereditem.create(ordereditem).then(result => {
		// Send created ordered items to client
		res.json(result);
	});
};

// Fetch all ordered items
exports.findAll = (req, res) => {
	Ordereditem.findAll().then(ordereditems => {
	  // Send all items to Client
	  res.json(ordereditems);
	});
};
