"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Viva Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);

// skipping the middle variable name in order to capture first and third
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swapping two variable
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// without using a temporary variable
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.order(2, 0));

// functional destructuring
const [starterChoice, mainChoice] = restaurant.order(2, 0);
console.log(starterChoice, mainChoice);

// nested destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
