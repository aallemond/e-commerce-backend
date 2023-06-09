const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

// Defining the properties of the Product Model
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Coming Soon!'
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true
            }
        },

         // Defining the category_id column
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;