"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Viva Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time = "20:22",
    address,
  }) {
    console.log(
      `order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // adding functional arguments using rest operato
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// rest patterns : opposite of spread operator
// spread is used for adding multiple values and build new arrays : expanding array to individual values
// rest is used to pack many values to array

// spread because on right side of =
const arr = [1, 2, ...[3, 4]];

// rest because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

// objects
const { sat, ...weekdays } = restaurant.openingHours;

// functions;
// passing multiple operators at the same time: spread operator;
// rest : opposite

const add = function (...numbers) {
  console.log(numbers); // packing all numbers to the array ;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 2, 1, 3);
const x = [3, 1, 3];
add(...x);

// expanding element from the existing object;
const newRestaurant = { ...restaurant, founder: "Thomask" };
restaurant.orderPizza("mushrooms", "sweet", "wheat", "oil", "gel");
