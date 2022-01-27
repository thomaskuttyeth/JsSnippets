const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
// a function has access to the variable enviornment (VE) of the
// execution  context in which it was created
// VE attached to the function, exactly as it was at the time and place
// the function was created.

/*
a closure is the closed-over variable enviornment of the execution context in which a function was created, even after that execution context is gone. 

a closure gives a function access to all the variables of its parent fucntion, even after that parent fucntion has returned.The function keeps a reference to its outer scope, which preserves the scope chain thorughout time. 

a closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place; 

a closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the enviornment where the function was created. 
*/
console.dir(booker);
