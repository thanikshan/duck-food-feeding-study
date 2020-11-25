const sequelize = require("../../dbConfig");
const { Sequelize } = require("sequelize");
const Food = sequelize.define("food", {
  foodName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Food;
