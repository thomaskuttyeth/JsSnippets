"use strict";
const ordersSet = new Set(["pasta", "pizza", "pasta", "topnoch", "mazza"]);
console.log(ordersSet);

const spels = new Set("Thomaskutty reji");
console.log(spels);

// how many unique spellings are there in the string
console.log(spels.size); // size of the set

console.log(spels.has("t")); // presence of element in a set
console.log(ordersSet.add("Burger")); // adding
console.log(ordersSet.delete("Burger")); // deleting

// clear()
// looping
for (const order of ordersSet) {
  console.log(order);
}

// removing the duplicate values
const staff = ["waiter", "chef", "waiter", "manager", "chef"];
const newStaff = new Set(staff);
console.log(newStaff);

// converting to array again
const finalStaffs = [...new Set(staff)];
