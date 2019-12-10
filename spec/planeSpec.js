describe("Plane", () =>{
  let testPlane = new Plane;

  beforeEach(() => {
    testPlane.accountedFor = true;
  });

  it("should have an airport", () => {
    let factoryPlane = new Plane
    expect(() => { factoryPlane.takeOff() }).toThrowError("plane needs an airport to take off");
  });

  describe("airborne status", () => {
    it("should be airborne after takeoff", () => {
      testPlane.takeOff();

      expect(testPlane.airborne).toBe(true);
    });

    it("should not be airborne after landing", () => {
      testPlane.takeOff();
      testPlane.land();

      expect(testPlane.airborne).toBe(false);
    })
  });
})