var Plane = require('../src/plane.js');
var Airport = require('../src/airport.js');

describe("Airport", () => {
  let testPlane = new Plane;
  let testAirport = new Airport;

  let clearDay = { weatherReport() { return 'clear'; } }
  let stormyDay = { weatherReport() { return 'stormy'; } }

  beforeEach(() => {
    testAirport.weather = clearDay.weatherReport();
  });

  describe("hangar capacity", () => {
    it("should have a default value of 100", () => {
      expect(testAirport.capacity).toEqual(100);
    })

    it("should be able to be overwritten", () => {
      let customAirport = new Airport(600);
      expect(customAirport.capacity).toEqual(600);
    })
  });
  
  describe("in stormy weather", () => {
    it("should not allow planes to take off", () => {
      expect(() => {
        testAirport.harbourPlane(testPlane);
        testAirport.weather = stormyDay.weatherReport();
        testAirport.commissionFlight(testPlane);
      }).toThrowError("plane cannot take off");
    })

    it("should not allow planes to take off", () => {
      expect(() => {
        testAirport.harbourPlane(testPlane);
        testAirport.commissionFlight(testPlane);
        testAirport.weather = stormyDay.weatherReport();
        testAirport.harbourPlane(testPlane);
      }).toThrowError("plane cannot land");
    })
  });

  describe("when harbouring planes", () => {
    it("should deny landing if airport is full", () => {
      let testAirport = new Airport(10);

      for(let i = 0; i < 10; i++) {
        testAirport.harbourPlane(new Plane);
      };

      expect(() => {
        testAirport.harbourPlane(testPlane);
      }).toThrowError("hangar is full");
    })
  });

  describe("after commissioning a flight", () => {
    let testPlane2 = new Plane;

    it("should not have the commissioned plane in the airport", () => {
      testAirport.harbourPlane(testPlane);
      testAirport.harbourPlane(testPlane2);
      testAirport.commissionFlight(testPlane);

      expect(testAirport.hangar).not.toContain(testPlane);
    })

    it("should not be able to commission the same plane while airborne", () => {
      testAirport.harbourPlane(testPlane);
      testAirport.commissionFlight(testPlane);

      expect(() => {
        testAirport.commissionFlight(testPlane)
      }).toThrowError("plane is already airborne");
    })
  });
})