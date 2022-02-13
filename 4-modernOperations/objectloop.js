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
};

const openingHours = {
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
};
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days.`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//propertry values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

// key and value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

// challenge
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// challenge part 1
for (let i = 0; i <= game.score.length; i++) {
  console.log(`Goal-${i + 1} - ${game.scored[i]}.`);
}
// calculate the average odd and log it to the console
const oddsEntris = Object.entries(game.odds);

console.log(oddsEntris);

let totalOdds = 0;
for (const [key, value] of oddsEntris) {
  totalOdds += Number(value);
}
const avgOdds = totalOdds / oddsEntris.length;
console.log(`average odds = ${avgOdds}`);

// printing the 3 odds
for (const [key, value] of oddsEntris) {
  let keyname = game[key] ?? "draw";
  console.log(`Odd of ${keyname}: ${value}`);
}

// bonus: create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.

let scores = {};
for (const name of game.scored) {
  scores[name] = 0;
}

for (const name of Object.keys(scores)) {
  for (const sec of game.scored) {
    if (sec == name) {
      scores[name] += 1;
    }
  }
}
// printing the scores obtained
console.log(scores);
