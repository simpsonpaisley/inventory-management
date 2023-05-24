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
		manufacturerID: 1001,
		cost: 3.51,
		supplierIDs: [2001, 2002],
		count: 50,
		barcode: '123456789123456',
		category: 'Tapes',
	});
	await Product.create({
		name: 'Mirror Adhesive',
		sku: 'mirror-adhesive',
		manufacturerID: 1002,
		cost: 5.67,
		supplierIDs: [2002],
		count: 45,
		barcode: '234567891234567',
		category: 'Adhesives',
	});

	await Manufacturer.create({
		name: '3M',
		website: 'https://3m.co.uk',
		contacts: [{ name: 'Tom', email: 'tom@domain.com' }],
		manufacturerID: 1001,
	});

	await Manufacturer.create({
		name: 'Wurth',
		website: 'https://eshop.wurth.co.uk/en/GB/GBP/',
		contacts: [{ name: 'Phil', email: 'phil@wurth.co.uk' }],
		manufacturerID: 1002,
	});

	await Supplier.create({
		name: 'Morelli',
		website: 'https://morelli.co.uk/',
		contacts: [
			{ name: 'Shaun', email: 'shaun@morelli.co.uk' },
			{ name: 'Jason', email: 'jason@morelli.co.uk' },
		],
		supplierID: 2001,
	});

	await Supplier.create({
		name: 'Viking Industrial',
		website: 'https://www.vikingtapes.co.uk/',
		contacts: [{ name: 'Gavin', email: 'gavin@vikingtapes.co.uk' }],
		supplierID: 2002,
	});

	console.log('Products Created');
	console.log('Manufacturer Created');
	console.log('Supplier Created');

	mongoose.disconnect();
}

seed();
