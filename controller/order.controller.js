const Order = require('../models').Order;
// Post an item
exports.create = (req, res) => {
	// Save to MySQL database
	let order = req.body;
	Order.create(order).then(result => {
		// Send created order to client
		res.json(result);
	});
};

// Fetch all order
exports.findAll = (req, res) => {
	Order.findAll().then(orders => {
	  // Send all items to Client
	  res.json(orders);
	});
};

// Find an order by Id
exports.findById = (req, res) => {
	Order.findById(req.params.orderId).then(order => {
		res.json(order);
	})
};

// Update an order
exports.update = (req, res) => {
	let item = req.body;
	let id = req.body.id;
	Order.update(item,
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully an order with id = " + id});
				   });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.orderId;
	Order.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully an order with id = ' + id});
	});
};
