const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(                                         // <= Defined & Initialized the ProductTag model with the specified attributes.
  {
    id: {                                                
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {                                      // <= Setted up a reference to the 'id' column in the 'product' model.
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {                                     // <= Setted up a reference to the 'id' column in the 'tag' model.
        model: 'tag',
        key: 'id',
      },
    },
  },
  { 
    sequelize,                                         // <= Setted the Sequelized connection and the model name.
    modelName: 'productTag',
  }
);

module.exports = ProductTag;                          // <= Exported the ProductTag model for use in other parts of the application.