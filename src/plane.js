let id = 0

const generateId = () => {
  return id++;
};

class Plane {
  constructor() {
    this.id = generateId();
    this.accountedFor = false;
    this.airborne = false;
  }
  
  takeOff() {
    if (this.accountedFor === false) { throw new Error("plane needs an airport to take off") }

    this.airborne = true;
  }

  land() {
    this.airborne = false;
  }
}