const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE);

const Product = require('./models/product');
const Manufacturer = require('./models/manufacturer');
const Supplier = require('./models/supplier');

async function seed() {
	await Product.create({
		name: '3M Fine Line Tape 6mm',
		sku: 'fine-line-6mm',
		manufacturer: '3M',
		costHistory: [
			{
				supplier: 'Morelli',
				supplierRef: 'morelli',
				date: '2023-05-26',
				cost: 1.65,
			},
			{
				supplier: 'Viking Industrial',
				supplierRef: 'vikingindustrial',
				date: '2023 - 04 - 26',
				cost: 1.75,
			},
		],
		suppliers: [
			{ name: 'Morelli', supplierRef: 'morelli' },
			{ name: 'Viking Industrial', supplierRef: 'vikingindustrial' },
		],
		count: 50,
		barcode: '123456789123456',
		category: 'Tapes',
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
		manufacturerRef: '3m',
		inventoryHistory: [
			{ date: '2023-05-30', sold: 5, recieved: 10 },
			{ date: '2023-05-31', sold: 4, received: 0 },
		],
		lowStock: 12,
		onOrder: { supplierRef: '3m', date: '2023-05-30', qtyOrdered: 20 },
	});
	await Product.create({
		name: 'Mirror Adhesive',
		sku: 'mirror-adhesive',
		manufacturer: 'Wurth',
		costHistory: [
			{
				supplier: 'Viking Industrial',
				supplierRef: 'vikingindustrial',
				date: '2023 - 05 - 26',
				cost: 3.58,
			},
		],
		suppliers: [{ name: 'Viking Industrial', supplierRef: 'vikingindustrial' }],
		count: 45,
		barcode: '234567891234567',
		category: 'Adhesives',
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
		manufacturerRef: 'wurth',
		inventoryHistory: [{ date: '2023-05-29', sold: 4, received: 8 }],
		lowStock: 10,
		onOrder: { supplierRef: 'wurth', date: '2023-04-25', qtyOrdered: 12 },
	});

	await Manufacturer.create({
		name: '3M',
		website: 'https://3m.co.uk',
		contacts: [{ name: 'Tom', email: 'tom@domain.com' }],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
		manufacturerRef: '3m',
	});

	await Manufacturer.create({
		name: 'Wurth',
		website: 'https://eshop.wurth.co.uk/en/GB/GBP/',
		contacts: [{ name: 'Phil', email: 'phil@wurth.co.uk' }],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
		manufacturerRef: 'wurth',
	});

	await Supplier.create({
		name: 'Morelli',
		website: 'https://morelli.co.uk/',
		contacts: [
			{ name: 'Shaun', email: 'shaun@morelli.co.uk' },
			{ name: 'Jason', email: 'jason@morelli.co.uk' },
		],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
		supplierRef: 'morelli',
	});

	await Supplier.create({
		name: 'Viking Industrial',
		website: 'https://www.vikingtapes.co.uk/',
		contacts: [{ name: 'Gavin', email: 'gavin@vikingtapes.co.uk' }],
		userID: 'auth0|646d1ad0ed7e9d013a3e7ed5',
		supplierRef: 'vikingindustrial',
	});

	console.log('Products Created');
	console.log('Manufacturer Created');
	console.log('Supplier Created');

	mongoose.disconnect();
}

seed();
