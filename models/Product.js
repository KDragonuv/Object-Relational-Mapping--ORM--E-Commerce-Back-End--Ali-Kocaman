const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}          // <= Defined the Product model by extending the Sequelize Model class.

Product.init(
  {
    id: {                               // <= Defined the 'id','product_name','price','stock' & 'category_id' attributes with specified properties.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,                     // <=  Set the Sequelized connection and the model name.
    modelName: 'product',
  }
);

module.exports = Product;         // <=  Export the Product models for use in other parts of the application.
