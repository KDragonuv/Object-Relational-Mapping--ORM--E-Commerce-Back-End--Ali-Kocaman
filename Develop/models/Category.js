const { Model, DataTypes } = require('sequelize');        // <= Import necessary modules from Sequelize.

const sequelize = require('../config/connection.js');     // <= Import the Sequelized connection from the configuration file.

class Category extends Model {}

Category.init(
  {
    id: {                                                // <= Defined the 'id' & 'category_name' attributes with the specified properties.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,                                          // <= Set the Sequelized connection and the model names.
    modelName: 'category',
  }
);

module.exports = Category;                             // <= Exporting Category model for use in other parts of the application.