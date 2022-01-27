const runOnce = function () {
  console.log("This will never run again");
};

// converting to an expression
// immediately invoked function expreesion
(function () {
  console.log("this will never run again");
})();

(() => console.log("this will also never run again"))();
{
  const isPrivate = 23;
  var notprivate = 21;
}

isPrivate;
notprivate;
