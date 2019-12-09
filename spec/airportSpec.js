describe("Airport", function() {
  let testPlane = new Plane;
  let testAirport = new Airport;

  let clearDay = { weatherReport() { return Symbol('clear'); } }
  let stormyDay = { weatherReport() { return Symbol('stormy'); } }

  beforeEach(function() {
    testAirport.weather = clearDay.weatherReport();
  });

  describe("hangar capacity", function() {
    it("should have a default value of 100", function() {
      expect(testAirport.capacity).toEqual(100);
    })

    it("should be able to be overwritten", function() {
      let customAirport = new Airport(600);

      expect(customAirport.capacity).toEqual(600);
    })
  });
})