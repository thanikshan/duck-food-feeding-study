const { FeedDetails, Location, FoodType, Food, UOM } = require("../models");

findOrAddFood = async (req, res) => {
  try {
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
  } catch (error) {
    console.log("errrrr", error);
    return null;
  }
};

findOrAddLocation = async (req, res) => {
  try {
    const locationData = await Location.findOrCreate({
      where: {
        locationName: req.body.locationName,
      },
    });
    return locationData[0].id;
  } catch (error) {
    console.log("errrrr", error);
    return null;
  }
};

findOrAddUOM = async (req, res) => {
  try {
    const uomData = await UOM.findOrCreate({
      where: {
        uomType: req.body.uomType,
      },
    });
    return uomData[0].id;
  } catch (error) {
    console.log("errrrr", error);
    return null;
  }
};

exports.addFeedDetails = async (req, res) => {
  try {
    const foodId = await findOrAddFood(req, res);
    const locationId = await findOrAddLocation(req, res);
    const uomId = await findOrAddUOM(req, res);
    if (foodId && locationId && uomId) {
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
    } else {
      res.status(400).json({ status: "failure" });
    }

    // await FeedDetails.create(
    //   {
    //     quantity: req.body.quantity,
    //     totalDucks: req.body.totalDucks,
    //     feedTime: req.body.feedTime,
    //     repeatSchedule: req.body.repeatSchedule,
    //     Food: [
    //       {
    //         foodName: req.body.foodName,
    //         FoodType: [{ foodTypeName: req.body.foodTypeName }],
    //       },
    //       {
    //         include: [
    //           {
    //             model: FoodType,
    //             required: true,
    //           },
    //         ],
    //       },
    //     ],
    //     UOM: [
    //       {
    //         uomType: req.body.uomType,
    //       },
    //     ],
    //     Location: [
    //       {
    //         locationName: req.body.locationName,
    //       },
    //     ],
    //   },
    //   {
    //     include: [
    //       {
    //         model: Food,
    //         UOM,
    //         Location,
    //         required: true,
    //       },
    //     ],
    //   }
    // );
  } catch (error) {
    console.log("errrrr", error);
    res.status(400).json({ status: "failure" });
  }
};
