initializeMockDB = () => {
    jest.mock('../models/location.model', () => {
        return mockDB.define('location', {
            id: 1,
            locationName: "Spring garden Park",
            createdAt: '2020-11-26T03:27:51.486Z',
            updatedAt: '2020-11-26T03:27:51.486Z'
        })
    });

    jest.mock('../models/food.model', () => {
        return mockDB.define('food', {
            id: 1,
            foodName: "Cereal",
            foodTypeId: 1,
            createdAt: '2020-11-26T03:27:51.486Z',
            updatedAt: '2020-11-26T03:27:51.486Z'
        })
    });


    jest.mock('../models/foodType.model', () => {
        return mockDB.define('foodType', {
            id: 1,
            foodTypeName: "Fish",
            createdAt: '2020-11-26T03:27:51.486Z',
            updatedAt: '2020-11-26T03:27:51.486Z'
        })
    });

    jest.mock('../models/uom.model', () => {
        return mockDB.define('uom', {
            id: 1,
            uomType: "KG",
            createdAt: '2020-11-26T03:27:51.486Z',
            updatedAt: '2020-11-26T03:27:51.486Z'
        })
    });


    jest.mock('../models/feedDetails.model', () => {
        return mockDB.define('feedDetails', {
            locationId: 1,
            foodId: 1,
            uomId: 1,
            totalDucks: 5,
            feedTime: "23:05",
            quantity: 5,
            repeatSchedule: true
        })
    });
}

const SequelizeMock = require("sequelize-mock");
const mockDB = new SequelizeMock();
sequelize = new SequelizeMock();

const FeedDetails = require("../models/feedDetails.model");
const Location = require("../models/location.model");
const Food = require("../models/food.model");
const FoodType = require("../models/foodType.model");
const UOM = require("../models/uom.model");


const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

const mockRequest = (body) => ({
    body
});

module.exports = { initializeMockDB, FeedDetails, Location, Food, FoodType, UOM, mockResponse, mockRequest };