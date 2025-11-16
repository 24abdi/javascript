class Animal {
  speak() { console.log("Some sound"); }
}
class Dog extends Animal {
  speak() { console.log("Woof!"); }
}
let pet = new Dog();
pet.speak(); // Woof!
