const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	sku: String,
	manufacturer: String,
	cost: Number,
	supplier: String,
	count: Number,
	barcode: Number,
	category: String,
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
