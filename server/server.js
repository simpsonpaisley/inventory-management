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

// Get All Products

app.get('/users', (request, response) => {
	response.json('This Endpoint is working');
});

app.get('/products', async function (request, response) {
	const products = await Product.find({});
	response.json(products);
});

app.get('/manufacturers', async function (request, response) {
	const manufacturers = await Manufacturer.find({});
	response.json(manufacturers);
});

app.get('/suppliers', async function (request, response) {
	const suppliers = await Supplier.find({});
	response.json(suppliers);
});

app.listen(PORT, () => {
	console.log('App is listening on ' + PORT);
});
