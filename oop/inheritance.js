class ElectricCar extends Car {
  charge() {
    console.log(`${this.brand} is charging...`);
  }
}
let tesla = new ElectricCar("Tesla");
tesla.start();  // Tesla engine started.
tesla.charge(); // Tesla is charging...
