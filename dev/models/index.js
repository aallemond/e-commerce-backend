// Importing Models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
    foreignKey: 'category_id'
});
// each category has many products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

// Products belong to many Tags
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});

// Tags belong to many Products
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};

