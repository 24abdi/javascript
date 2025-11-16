// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     adress: {
//         street: "5th Avenue",
//         number: 10
//     },
//     hobbies: ["reading", "traveling", "swimming"]
// };
// person.age = 31;
// console.log(person.age); 

// let car = {}
// car.make = "marcedes";
// car.model = "C300";
// car.year = 2025;
// car.color = "black";
// car.features = ["sunroof", "leather seats", "Bluetooth"];
// car.owner = {
//     name: "Alice",
//     licenseNumber: "XYZ1234"
// };
// console.log(car);



let footballer = {
    name: "Lionel Messi",
    age: 36,
    club: "Inter Miami",
    position: "Forward",
    stats: {
        goals: 800,
        assists: 300,
        appearances: 1000},
    kick: function() {
    console.log(footballer.name + " scored a goal!");
},
};

// for (const key in footballer) {
//   console.log(footballer[key]);
// }
// console.log(footballer.position);
 footballer.kick();