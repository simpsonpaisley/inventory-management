// Importing Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
const bp = require('body-parser');
const Product = require('./models/product');
const Supplier = require('./models/supplier');
const Manufacturer = require('./models/manufacturer');

app.use(bp.json());

// Root Endpoint

app.get('/', (request, response) => {
	response.json('This is the root enpoint');
});

// Get All Entries

app.get('/products', async function (request, response) {
	const products = await Product.find(request.query);
	response.json(products);
});

app.post('/products', async function (request, response) {
	const newProduct = await Product.create(request.body);
	response.json(newProduct);
});

app.put('/products/:id', async function (request, response) {
	const productID = request.params.id;
	const updatedProduct = request.body;

	await Product.findByIdAndUpdate(productID, updatedProduct);

	response.json('Product Updated Successfully');
});

app.get('/manufacturers', async function (request, response) {
	const manufacturers = await Manufacturer.find(request.query);
	response.json(manufacturers);
});

app.post('/manufacturers', async function (request, response) {
	const newManufacturer = await Manufacturer.create(request.body);
	response.json(newManufacturer);
});

app.get('/suppliers', async function (request, response) {
	const suppliers = await Supplier.find(request.query);
	response.json(suppliers);
});

app.post('/suppliers', async function (request, response) {
	const newSupplier = await Supplier.create(request.body);
	response.json(newSupplier);
});

app.listen(PORT, () => {
	console.log('App is listening on ' + PORT);
});
