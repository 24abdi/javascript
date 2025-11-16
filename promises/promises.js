const orderFood = new Promise((resolve, reject) => {
    const kitchenHasIngredients = false;

    if (kitchenHasIngredients) {
        resolve("Here’s your pizza!");
    } else {
        reject("Sorry, we ran out of ingredients.");
    }
});

orderFood
    .then((food) => console.log(food))
    .catch((error) => console.log(error));
