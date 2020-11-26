module.exports = (app) => {
  const foodFeedController = require("../controllers/foodFeed.controller");
  app.post("/feedDetails", foodFeedController.addFeedDetails);
  app.get("/foodType", foodFeedController.getAllFoodType);
  app.get("/food", foodFeedController.getAllFood);
  app.get("/uom", foodFeedController.getAllUOM);
  app.get("/location", foodFeedController.getAllLocation);
  app.get("/feedDetails", foodFeedController.getAllFeedDetails);
};
