// let orginalArray = [1, 2, 3];
// console.log(orginalArray); 

// let copiedArray = [orginalArray[0], orginalArray[1], orginalArray[2]];
// console.log(copiedArray);

// let copiedArray = [...orginalArray];
// console.log(copiedArray);


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [0, ...numbers, 5];
// console.log(newNumbers);


let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};


const newPerson = {...person, country: 'USA'};
console.log(newPerson);