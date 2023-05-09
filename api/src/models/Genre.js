const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Genre", {

      id:{
        type: DataTypes.INTEGER,
        autoncrement: true,
        primaryKey: true
        }, 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {timestamps: false});
  };