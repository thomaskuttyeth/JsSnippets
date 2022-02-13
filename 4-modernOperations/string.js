const airline = "Tap air portugal";
const plane = "A320";
// airline[0], airline[1]
// plane[2];

// plane.length;
// airline.indexOf('r');
// airline.lastIndexOf('r');
// airline.indexOf('portugal');  returns -1

// slicing : begin,end
const slice = airline.slice(4);
const slice2 = airline.slice(4, 7);

const firstWord = airline.slice(0, airline.indexOf(" "));
const lastWrod = airline.slice(airline.lastIndexOf(" ") + 1);
const lastLetter = airline.slice(-1);

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("you got the middle seat");
  } else {
    console.log("you got lucky");
  }
};
checkMiddleSeat("11B");
// string definition
console.log(new String("thomas")); // boxing
console.log(typeof new String("thomas"));

console.log(new String("thomas").slice(0));

//airline.toLowerCase()
//airline.toUpperCase()

// fix capitalization in name
const passenger = "THomas";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

// create a function for capitlaizating the name
// comparing emails
const email = "hello@jonas.io";
const loginEmail = " hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

// trim from begining and end
// replacing
const priceGB = "288,97$";
const priceUS = priceGB.replace("$", "rs").replace(",", ".");

const annoucement = "all passengers come ot boarding door 23, boarding door 23";
const annoucementNew = annoucement.replace(/door/g, "gate");

// booleans
const plane2 = "A320neo";
//plane.includes('A32');
// plane.startswith('Air');

if (plane2.startsWith("A") && plane2.endsWith("neo")) {
  console.log("part of the new airbus family");
}
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

// splitting the string
const my_string = "apple,orange,mango,strawberry";
// my_string.split(',')
const mystring_arr = my_string.split(",");

const myname = "thomaskutty reji";
const [firstname, lastname] = myname.split(" ");

const new_name = ["Mr.", firstname, lastname.toUpperCase()].join("-");
// capilizating function
const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(" ");
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
// padding
const message = "go to gate 23";
console.log(message.padStart(25, "+").padEnd(35, "-"));

// real world application
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard("gcnn232284322434984"));

// repeat method : repeating the string multiple times
const message2 = "Bad weather .. All departures delayed ...";
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"^".repeat(n)}`);
};

planesInline(4);
