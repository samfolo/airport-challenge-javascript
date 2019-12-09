let id = 0

const generateId = () => {
  return id++;
};

class Plane {
  constructor() {
    this.id = generateId();
  }
}