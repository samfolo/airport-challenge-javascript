class Plane {
  constructor() {
    this.accountedFor = false;
    this.airborne = false;
  }
  
  takeOff() {
    if (this.accountedFor === false) { throw new Error("plane needs an airport to take off"); }
    if (this.airborne === true) { throw new Error("plane is currently airborne"); }

    this.airborne = true;
  }

  land() {
    if (this.airborne === false && this.accountedFor === true) { throw new Error("plane is currently grounded"); }

    this.airborne = false;
    this.accountedFor = true;
  }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
  module.exports = Plane;
}