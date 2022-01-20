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
  scored: ["Lewanowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// create one player array for each team
const players1 = game.players[0]; // TEAM = Bayern Munich;
const players2 = game.players[1];

// the first player is the goalkeeper and others are field players
const [gk, ...fieldPlayers] = [...players1];

// create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

// team 1 used 3 substitute players. so create  a new array (playersFinal) containing all the
// original team1 players plus 'thiago','coutinho' and 'peristic'
const playersFinal = [...players1, "Thiago", "Coutihno", "Peristic"];

// based on the game.odds object, create one variable for each odd
const {
  odds: { team1, x: draw, team2 },
} = game;
printGoals = function (...players) {
  console.log(players);
};
//
team1 < team2 && console.log("team1 is likely to win");

// for-of loop  ===============================================
for (const item of allPlayers) console.log(item);

for (const item of allPlayers.entries()) {
  console.log(`${item[0]}: ${item[1]}`);
}

// if we create a property outside an object we can just pass the property with the
// same name to the object;

// we can avoid the function keyword usage and the = symbol while creating methods inside the object
