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
app.use(bp.json());

// Root Endpoint

app.get('/', (request, response) => {
	response.json('This is the root enpoint');
});

// Get All Products

app.get('/users', (request, response) => {
	response.json('This Endpoint is working');
});
// Connection

app.listen(PORT, () => {
	console.log('App is listening on ' + PORT);
});
