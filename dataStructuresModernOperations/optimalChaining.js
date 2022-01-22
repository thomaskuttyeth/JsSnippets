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

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
if (restaurant.openingHours.fri) {
    console.log(restaurant.openingHours.fri.open)}; 

if (restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.day); 
} */

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// practical examples
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  const newopen = restaurant.openingHours[day]?.open ?? "closed"; // nullish coalse operator and chaining
  console.log(`On ${day}, we open at ${newopen}`);
}

// chaining on functions
console.log(restaurant.order?.(0, 1) ?? "method does not exist");
console.log(restaurant.pizza?.(0, 1) ?? "method does not exist");

// optional chaining on arrays
const users = [{ name: "thomas", email: "thomaskuttyre@gmail.com" }];
// if email exists then email else return 'user array empty
console.log(users[0]?.email ?? "user array empty");

// looping objects
for (const day of Object.keys(openingHours)){
  console.log(day);
}
