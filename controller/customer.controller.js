const db =require("../models/index")
const Customer = require('../models').Customer;


// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	Customer.create(customer).then(result => {		
		// Send created customer to client
		res.json(result);
	});
};
exports.generaldetails = (req, res)=> {
    db.sequelize.query("SELECT c.cust_name, c.phone_no, o.id as \"order id\",o.order_date,iu.id as \"item id\",i.item_name,iu.unit_price, oi.quantity_ordered,(iu.unit_price*oi.quantity_ordered) as total FROM customers c JOIN orders o on o.cust_id = c.id JOIN ordereditems oi on oi.OrderId = o.id join items i on i.id= oi.ItemId JOIN itemupdates iu on iu.item_id= i.id ORDER BY c.cust_name DESC",
        {type: db.sequelize.QueryTypes.SELECT})
        .then(customers => {
            // Send all general details to Client
            res.json(customers);
        });
};
// Fetch all Customers
exports.customerorders = (req, res) => {
    db.sequelize.query("SELECT c.cust_name,o.order_date,i.item_name,iu.unit_price, oi.quantity_ordered,(iu.unit_price*oi.quantity_ordered) as total FROM customers c JOIN orders o on o.cust_id = c.id JOIN ordereditems oi on oi.OrderId = o.id join items i on i.id= oi.ItemId JOIN itemupdates iu on iu.item_id= i.id ORDER BY c.cust_name DESC").then(customers => {
        // Send all customers to Client
        res.json(customers);
    });
};
 
// Fetch all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
	  // Send all customers to Client
	  res.json(customers);
	})
		.catch(error=> res.status(400).send(error))
;
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
		res.json(customer);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	let id = req.body.id;
	Customer.update(customer, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};