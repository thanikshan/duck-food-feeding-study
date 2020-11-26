const { FeedDetails, Location, FoodType, Food, UOM } = require("../models");
const { Sequelize } = require("sequelize");

findOrAddFood = async (req, res) => {
  const foodTypeData = await FoodType.findOrCreate({
    where: {
      foodTypeName: req.body.foodTypeName,
    },
  });

  const foodData = await Food.create({
    foodName: req.body.foodName,
    foodTypeId: foodTypeData[0].id,
  });
  return foodData.id;
};

findOrAddLocation = async (req, res) => {
  const locationData = await Location.findOrCreate({
    where: {
      locationName: req.body.locationName,
    },
  });
  return locationData[0].id;
};

findOrAddUOM = async (req, res) => {
  const uomData = await UOM.findOrCreate({
    where: {
      uomType: req.body.uomType,
    },
  });
  return uomData[0].id;
};

exports.getAllFoodType = async (req, res) => {
  try {
    const foodTypes = await FoodType.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col("foodTypeName")),
          "foodTypeName",
        ],
      ],
    })
    res.status(200).json(foodTypes);

  } catch (error) {
    res.status(500).json({ status: "failure" });
  }
};

exports.getAllFood = async (req, res) => {
  try {
    const foodNames = await Food.findAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("foodName")), "foodName"],
      ],
    })
    res.status(200).json(foodNames);

  } catch (error) {
    res.status(500).json({ status: "failure" });
  }
};

exports.getAllLocation = async (req, res) => {
  try {
    const locationNames = await Location.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col("locationName")),
          "locationName",
        ],
      ],
    })
    res.status(200).json(locationNames);

  } catch (error) {
    res.status(500).json({ status: "failure" });
  }
};

exports.getAllUOM = async (req, res) => {
  try {
    const uomTypes = await UOM.findAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("uomType")), "uomType"],
      ],
    })
    res.status(200).json(uomTypes);

  } catch (error) {
    res.status(500).json({ status: "failure" });
  }
};

exports.getAllFeedDetails = async (req, res) => {
  try {
    const feedDetails = await FeedDetails.findAll({
      include: [Food, UOM, Location],
    })
    res.status(200).json(feedDetails);

  } catch (error) {
    res.status(500).json({ status: "failure" });
  }
};

exports.addFeedDetails = async (req, res) => {
  try {
    const foodId = await findOrAddFood(req, res);
    const locationId = await findOrAddLocation(req, res);
    const uomId = await findOrAddUOM(req, res);
    const foodData = await FeedDetails.create({
      foodId: foodId,
      locationId: locationId,
      uomId: uomId,
      quantity: req.body.quantity,
      totalDucks: req.body.totalDucks,
      feedTime: req.body.feedTime,
      repeatSchedule: req.body.repeatSchedule,
    });
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ status: "failure" });
  }
};
