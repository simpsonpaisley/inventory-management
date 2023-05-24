const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplierSchema = new Schema({
	name: String,
	website: String,
	contacts: Array,
	supplierID: Number,
});

const supplier = mongoose.model('supplier', supplierSchema);

module.exports = supplier;
