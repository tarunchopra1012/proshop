import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find((p) => {
        return p._id === productId;
    });

    res.json(product);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});