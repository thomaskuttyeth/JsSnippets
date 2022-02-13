"use strict";
// bind method

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

const eurowings = {
  name: "Eurowings",
  iatacode: "EW",
  bookings: [],
};
const book = lufthansa.book;
// binding the book function to the eurowings
const bookEW = book.bind(eurowings);
bookEW(23, "steven williams");

const bookEW23 = book.bind(eurowings, 23); //flight number is preset
bookEW23("jonas schmedman");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application : preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
