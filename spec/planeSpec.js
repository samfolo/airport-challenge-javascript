var Plane = require('../src/plane.js');

describe("Plane", () =>{
  let testPlanePlaneSpec = new Plane;

  beforeEach(() => {
    testPlanePlaneSpec.accountedFor = true;
  });

  afterEach(() => {
    testPlanePlaneSpec.airborne = false;
  });

  it("should have an airport", () => {
    let factoryPlane = new Plane;

    expect(() => { factoryPlane.takeOff() }).toThrowError("plane needs an airport to take off");
  });

  describe("airborne status", () => {
    it("should be airborne after takeoff", () => {
      testPlanePlaneSpec.takeOff();

      expect(testPlanePlaneSpec.airborne).toBe(true);
    })

    it("should not be airborne after landing", () => {
      testPlanePlaneSpec.takeOff();
      testPlanePlaneSpec.land();

      expect(testPlanePlaneSpec.airborne).toBe(false);
    })
  });

  describe("when airborne", () => {  
    it("should not be able to take off", () => {
      testPlanePlaneSpec.takeOff();

      expect(() => { testPlanePlaneSpec.takeOff() }).toThrowError("plane is currently airborne");
    })
  });

  describe("when grounded", () => {
    it("should not be able to land", () => {
      testPlanePlaneSpec.accountedFor = true;

      expect(() => { testPlanePlaneSpec.land() }).toThrowError("plane is currently grounded");
    })
  });
});