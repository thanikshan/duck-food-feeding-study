const sequelize = require("../../dbConfig");
const { Sequelize } = require("sequelize");
const FoodType = sequelize.define(
  "foodType",
  {
    foodTypeName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "foodType",
  }
);

module.exports = FoodType;
