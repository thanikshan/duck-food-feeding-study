const sequelize = require("../../dbConfig");
const FeedDetails = require("./feedDetails.model");
const { Sequelize } = require("sequelize");
const Location = sequelize.define(
  "location",
  {
    locationName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "location",
  }
);

module.exports = Location;
