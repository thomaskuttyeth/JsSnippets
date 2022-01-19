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
      `order recieved ! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//  object destructuring
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
  ss,
} = restaurant;

// console.log(restaurantName, hours, tags);

// setting default value
const { menu = [], starterMenu: starters = [] } = restaurant;

// mutating
let a = 11;
let b = 100;
const obj = { a: 23, b: 25, c: 459 };
({ a, b } = obj);

// nested objects
const {
  fri: { open: friOpening, close: friClosing },
} = openingHours;

//
restaurant.orderDelivery({
  address: "Via del Sole,21",
  mainIndex: 2,
  starterIndex: 2,
});
