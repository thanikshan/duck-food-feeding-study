const sequelize = require("../../dbConfig");
const FeedDetails = require("./feedDetails.model");
const { Sequelize } = require("sequelize");
const UOM = sequelize.define(
  "uom",
  {
    uomType: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "uom",
  }
);

module.exports = UOM;
