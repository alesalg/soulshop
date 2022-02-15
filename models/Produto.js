// schema defini o formado do objeto e o model defini o produto em si
const { model, Schema } = require('mongoose');

const Produto = model(
    "Produto",
    new Schema({
        name: { type: String, required: true},
        price: { type: Number, required: true},
        description: { type: String, required: true},
        quantity: { type: Number, required: true},
        image: { type: String}
    })
);

module.exports = Produto;