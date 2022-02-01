"use strict";

var firstName = "Matilda";
const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
// arrow function use the this keyword of the parent scope ;

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

let age = 23;
let oldage = age;
age = 25;
console.log(age);
console.log(oldage);

const me = {
  name: "thomas",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("friend", friend);
console.log("Me", me);

// primitives = {number, string, boolean, undefined, null, symbol, bigint}
// objects ; reference types;

// Object.assign({},jessica2);
// deep clone using external library
