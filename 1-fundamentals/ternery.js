const age = 35;

//ternery operator
age >= 18
  ? console.log("i like to drink drink wine 🍷")
  : console.log("i like to drink drink water 💧");

// another way

const myage = 25;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
