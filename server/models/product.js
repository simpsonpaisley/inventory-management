const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	sku: String,
	manufacturer: String,
	costHistory: Array,
	suppliers: Array,
	count: Number,
	barcode: String,
	category: String,
	userID: String,
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
