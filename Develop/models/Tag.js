const { Model, DataTypes } = require('sequelize');                    // <= Imported necessary modules from Sequelize.
const sequelize = require('../config/connection');                    // <= Imported the Sequelize connection from the configuration file.

class Tag extends Model {}                                         

Tag.init(                                                             // <= Defined and Initialized the Tag model with the specified attributes.

  {
    id: {                                                             // <= Defined the 'id' & 'tag_name' attributes with the specified properties.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'tag',
  }
);

module.exports = Tag;                                               // <= Exported the Tag model for use in other parts of the application.