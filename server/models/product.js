const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	sku: String,
	manufacturerID: String,
	cost: Number,
	supplierIDs: Array,
	count: Number,
	barcode: String,
	category: String,
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
