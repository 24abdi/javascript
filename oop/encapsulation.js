class Car {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} engine started.`);
  }
}
let car1 = new Car("Toyota");
car1.start(); // Toyota engine started.
c