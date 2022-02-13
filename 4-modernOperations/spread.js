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
};

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(arr);
console.log(7, 8, 9);
// adding one element
const newMenu = [...restaurant.mainMenu, "Gnocci"];
// joining two arrays using spread
const finalMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// real world example
/*
const ingredients = [
  prompt(`lets's make pasta ! ingredient 1 ?`),
  prompt("ingredient 2? "),
  prompt("ingredient 3? "),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients); 
*/
