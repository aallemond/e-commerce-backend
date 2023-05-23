const {Tag} = require('../models');

const tagData = [
    {
        tag_name: 'Jewelry',
    },

    {
        tag_name: 'Sneakers',
    },

    {
        tag_name: 'Denim',
    },

    {
        tag_name: 'Mens Tops'
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;