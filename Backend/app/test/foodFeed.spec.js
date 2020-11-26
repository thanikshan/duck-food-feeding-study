const { initializeMockDB, FeedDetails, Location, Food, FoodType, UOM, mockResponse, mockRequest } = require('./initializeTest');
const foodFeed = require('../controllers/foodFeed.controller');

initializeMockDB();

describe("Testing auto suggestion controllers", () => {
    beforeAll(() => {
        FoodType.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "foodTypeName": "Fish", "id": 1 }]
            });
        Food.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "foodName": "Cereal", "id": 1 }]
            });
        UOM.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "uomType": "KG", "id": 1 }]
            });
        Location.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "locationName": "Spring garden Park", "id": 1 }]
            });
    });
    it("testing foodtype controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllFoodType({}, resp);
        expect(resp.status).toHaveBeenCalledWith(200);
        expect(resp.json).toHaveBeenCalledWith([{ "foodTypeName": "Fish", "id": 1 }]);
    });
    it("testing food controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllFood({}, resp);
        expect(resp.status).toHaveBeenCalledWith(200);
        expect(resp.json).toHaveBeenCalledWith([{ "foodName": "Cereal", "id": 1 }]);
    });
    it("testing location controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllLocation({}, resp);
        expect(resp.status).toHaveBeenCalledWith(200);
        expect(resp.json).toHaveBeenCalledWith([{ "locationName": "Spring garden Park", "id": 1 }]);
    });
    it("testing uom controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllUOM({}, resp);
        expect(resp.status).toHaveBeenCalledWith(200);
        expect(resp.json).toHaveBeenCalledWith([{ "uomType": "KG", "id": 1 }]);
    });
});

describe("Testing auto suggestion controllers error", () => {
    beforeAll(() => {
        FoodType.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                throw new Error("error");
            });
        Food.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                throw new Error("error");
            });
        UOM.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                throw new Error("error");
            });
        Location.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                throw new Error("error");
            });
    });
    it("testing foodtype controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllFoodType({}, resp);
        expect(resp.status).toHaveBeenCalledWith(500);
    });
    it("testing food controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllFood({}, resp);
        expect(resp.status).toHaveBeenCalledWith(500);
    });
    it("testing location controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllLocation({}, resp);
        expect(resp.status).toHaveBeenCalledWith(500);
    });
    it("testing uom controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllUOM({}, resp);
        expect(resp.status).toHaveBeenCalledWith(500);
    });
});

describe("Testing get controllers", () => {
    beforeAll(() => {
        FeedDetails.findAll = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{
                    locationId: 1,
                    foodId: 1,
                    uomId: 1,
                    totalDucks: 5,
                    feedTime: "23:05",
                    quantity: 5,
                    repeatSchedule: true
                }]
            });
    });
    it("testing feeddetails controller", async() => {
        const resp = mockResponse()
        await foodFeed.getAllFeedDetails({}, resp);
        expect(resp.status).toHaveBeenCalledWith(200);
        expect(resp.json).toHaveBeenCalledWith([{
            locationId: 1,
            foodId: 1,
            uomId: 1,
            totalDucks: 5,
            feedTime: "23:05",
            quantity: 5,
            repeatSchedule: true
        }]);
    });

});


describe("Testing POST controllers", () => {
    beforeAll(() => {
        FoodType.findOrCreate = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "id": 1 }]
            });
        Food.create = jest
            .fn()
            .mockImplementationOnce(() => {
                return { "id": 1 }
            });
        UOM.findOrCreate = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "id": 1 }]
            });
        Location.findOrCreate = jest
            .fn()
            .mockImplementationOnce(() => {
                return [{ "id": 1 }]
            });
        FeedDetails.create = jest
            .fn()
            .mockImplementationOnce(() => {
                return { "id": 1 }
            });
    });
    it("testing feed data controller without repeat", async() => {
        const req = mockRequest({
            "locationName": "Some Park",
            "food": "Cereal",
            "foodTypeName": "Fish",
            "totalDucks": 5,
            "quantity": 10,
            "feedTime": "23:05",
            "uomType": "KG"
        });
        const res = mockResponse();
        const response = await foodFeed.addFeedDetails(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ status: "success" });
    });
});