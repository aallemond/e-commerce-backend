const {Product} = require('../models');

const productData = [
    {
        productName: 'White T-Shirt',
        price: 9.99,
        stock: 20,
        category_id: 1,
    },

    {
        productName: 'Blue Jeans',
        price: 29.99,
        stock: 25,
        category_id: 2,
    },

    {
        productName: 'Basketball Shoes',
        price: 59.99,
        stock: 10,
        category_id: 3,
    },

    {
        productName: 'Gold Earrings',
        price: 999.99,
        stock: 5,
        category_id: 4,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;