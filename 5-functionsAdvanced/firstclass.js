"use strict";
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Original string : ${str}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer("javascript is the best", upperFirstWord);
transformer("javascript is the best", oneWord);

const high5 = function () {
  console.log("hi");
};
document.body.addEventListener("click", high5);

["jonas", "thomas"].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
console.log(greeterHey("thomas"));

greet("hola")("thomas");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("hi")("jasmine");

const lufthansa = {
  airline: "Lufthana",
  iatacode: "LH",
  bookings: [],
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(234, "thomaskutty reji");
lufthansa.book(235, "nicolette mart");

const eurowings = {
  name: "Eurowings",
  iatacode: "EW",
  bookings: [],
};

// call methods
const book = lufthansa.book;
// does not work
// book(23,'sophie');
book.call(eurowings, 23, "sophie");

const swiss = {
  name: "swiss",
  iatacode: "SW",
  bookings: [],
};
book.call(swiss, 958, "Mary cooper");

// apply method
const flightData = [123, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
book.call(eurowings, ...flightData);
