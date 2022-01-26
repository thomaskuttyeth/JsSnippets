"use strict";
const bookingS = [];
const createBooking = function (flightNum, numPassenger = 1, price = 199) {
  // numPassenger = numPassenger || 1 ;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookingS.push(booking);
};
createBooking("LH123");

// value vs reference
// how primitives and objects works
const flight = "LH234";
const thomas = {
  name: "Thomas reji",
  passport: 293852034,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 293852034) {
    alert("check in");
  } else {
    alert("wrong passport");
  }
};
// checkIn(flight, thomas);
// console.log(flight);
// console.log(thomas);
const newPassport = function(person){
    person.passport = Math.trunc(Math.random()) * 10000000000; 
}; 


