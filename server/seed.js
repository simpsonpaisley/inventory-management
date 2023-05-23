const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE);

const product = require('./models/product');

async function seed() {
	await product.create({
		name: 'AC-90 CO2 500ml',
		sku: 'ac-90-500',
		manufacturer: 'CRC Industries',
		cost: 3.21,
		supplier: 'CRC Industries',
		count: 28,
		barcode: '123456789123456',
		category: 'Multi-Purpose Lubricants',
	});

	await product.create({
		name: '3M Fine Line Masking Tape 6mm',
		sku: 'fine-line-6',
		manufacturer: '3M',
		cost: 1.24,
		supplier: 'Morelli',
		count: 45,
		barcode: 23456789123456,
		category: 'Tapes',
	});

	console.log('Product Created');

	mongoose.disconnect();
}

seed();
