const Itemupdate = require('../models').Itemupdate;
// Post an item
exports.create = (req, res) => {
    // Save to MySQL database
    let itemupdate = req.body;
    Itemupdate.create(itemupdate).then(result => {
        // Send created item to client
        res.json(result);
    });
};

// Fetch all Items
exports.findAll = (req, res) => {
    Itemupdate.findAll().then(itemupdates => {
        // Send all itemupdates to Client
        res.json(itemupdates);
    });
};

// Find an itemupdate by Id
exports.findById = (req, res) => {
    Itemupdate.findById(req.params.itemupdateId).then(itemupdate => {
        res.json(itemupdate);
    })
};

// Update an item
exports.update = (req, res) => {
    let itemupdate = req.body;
    let id = req.body.id;
    Itemupdate.update(itemupdate,
        { where: {id: id} }
    ).then(() => {
        res.status(200).json({msg:"updated successfully an item update with id = " + id});
    });
};

// Delete a itemupdate by Id
exports.delete = (req, res) => {
    const id = req.params.itemupdateId;
    Itemupdate.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully an itemupdate with id = ' + id});
    });
};
