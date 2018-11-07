const Item = require('../models').Item;
// Post an item
exports.create = (req, res) => {
	// Save to MySQL database
	let item = req.body;
	Item.create(item).then(result => {
		// Send created item to client
		res.json(result);
	});
};

// Fetch all Items
exports.findAll = (req, res) => {
	Item.findAll().then(items => {
	  // Send all items to Client
	  res.json(items);
	});
};

// Find an item by Id
exports.findById = (req, res) => {
	Item.findById(req.params.itemId).then(item => {
		res.json(item);
	})
};

// Update an item
exports.update = (req, res) => {
	let item = req.body;
	let id = req.body.id;
	Item.update(item,
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully an item with id = " + id});
				   });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.itemId;
	Item.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully an item with id = ' + id});
	});
};
