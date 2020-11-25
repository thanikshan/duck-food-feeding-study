const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("freshworks", "admin", "admin123", {
  host: "freshworks.cqxxhmses0ol.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize;
