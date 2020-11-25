const sequelize = require("../../dbConfig");
const { Sequelize } = require("sequelize");

const Food = require("./food.model");
const UOM = require("./uom.model");
const Location = require("./location.model");

const FeedDetails = sequelize.define(
  "feedDetails",
  {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    totalDucks: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    feedTime: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    repeatSchedule: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    tableName: "feedDetails",
  }
);

module.exports = FeedDetails;
