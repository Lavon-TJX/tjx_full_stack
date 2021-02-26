const dB = require("../models");
const Order = dB.orders;

exports.findAll = function(req, res) {
    // get all orders from dB
    Order.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while getting all orders"
            });
        });
};

exports.createOrder = function(req, res) {
    // create an order and save it to the dB
    const order = {
        orderId: req.body.orderId,
        rawCost: req.body.rawCost,
        productId: req.body.productId,
        quantity: req.body.quantity
    };

      Order.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Order."
            });
        });    
}