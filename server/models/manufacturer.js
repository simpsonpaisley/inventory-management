const mongoose = require('mongoose');
const { Schema } = mongoose;

const manufacturerSchema = new Schema({
	name: String,
	website: String,
	contacts: Array,
	userID: String,
	manufacturerRef: String,
});

const manufacturer = mongoose.model('manufacturer', manufacturerSchema);

module.exports = manufacturer;
