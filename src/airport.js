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
    if (this.weather == 'stormy') { throw new Error("plane cannot land") };
    if (this.hangar.length >= 100) { throw new Error("hangar is full") };

    plane.land;
    this.hangar.push(plane);
  }

  commissionFlight(plane) {
    if (this.weather == 'stormy') { throw new Error("plane cannot take off") };
    
    plane.takeOff;
    this.hangar.splice(this.hangar.indexOf(plane), 1)
    return 'THIS..'
  }
};