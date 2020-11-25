module.exports = (app) => {
  const foodFeedController = require("../controllers/foodFeed.controller");
  app.post("/test", foodFeedController.addFeedDetails);
};
