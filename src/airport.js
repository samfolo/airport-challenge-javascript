let weatherConditions = ['stormy', 'clear'];
let index = Math.floor(Math.random() * weatherConditions.length);

class Airport {
  constructor(capacity = 100) {
    this.capacity = capacity;
    this.hangar = [];
    this.weather = weatherConditions[index];
  }

  set (weather) {
    this.weather = weather;
  }

  harbourPlane(plane) {
    if (this.weather === 'stormy') { throw new Error("plane cannot land") };
    if (this.hangar.length >= this.capacity) { throw new Error("hangar is full") };

    plane.land();
    this.hangar.push(plane);
    plane.accountedFor = true;
  }

  commissionFlight(plane) {
    if (this.weather === 'stormy') { throw new Error("plane cannot take off") };
    if (plane.airborne === true) { 
      throw new Error("plane is already airborne") 
    };
    
    plane.takeOff();
    this.hangar.splice(this.hangar.indexOf(plane))
  }
};

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
  module.exports = Airport;
}