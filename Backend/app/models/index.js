const FeedDetails = require("./feedDetails.model");
const Location = require("./location.model");
const Food = require("./food.model");
const FoodType = require("./foodType.model");
const UOM = require("./uom.model");
const sequelize = require("../../dbConfig");

FeedDetails.belongsTo(Location);
FeedDetails.belongsTo(Food);
FeedDetails.belongsTo(UOM);
Food.belongsTo(FoodType);

Location.hasMany(FeedDetails);
Food.hasMany(FeedDetails);
UOM.hasMany(FeedDetails);
FoodType.hasMany(Food);

sequelize.sync().catch((error) => {
  console.log(`Error in Synchronization ${error}`);
});

module.exports = { Location, FeedDetails, Food, FoodType, UOM };
