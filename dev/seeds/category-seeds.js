const {Category} = require('../models');

const categoryData = [
    {
        category_name: 'Shirts'
    },

    {
        category_name: 'Pants'
    },

    {
        category_name: 'Shoes'
    },

    {
        category_name: 'Accessories'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;