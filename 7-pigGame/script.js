"use strict";
// Selecting elements ;
const playerElem0 = document.querySelector(".player--0");
const playerElem1 = document.querySelector(".player--1");

const scoreElem0 = document.getElementById("score--0");
const scoreElem1 = document.querySelector("#score--1");
const currentElem0 = document.getElementById("current--0");
const currentElem1 = document.getElementById("current--1");

const diceElem = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore, activePlayer, playing, scores;

// starting conditions ;
const init = function () {
  playerElem0.classList.remove("player--winner");
  playerElem1.classList.remove("player--winner");
  // setting the initial scores as zero
  scoreElem0.textContent = 0;
  scoreElem1.textContent = 0;
  currentElem0.textContent = 0;
  currentElem1.textContent = 0;
  playerElem0.classList.add("player--active");
  playerElem1.classList.remove("player--active");
  scores = [0, 0];
  // current score
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // we need to hide the die value(images)
  diceElem.classList.add("hidden");
};

init();
const switchPlayer = function () {
  // switch to the next player ;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // changing the white effect ;
  playerElem0.classList.toggle("player--active");
  playerElem1.classList.toggle("player--active");
};

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. generating a random dice rolll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice
    diceElem.classList.remove("hidden");
    diceElem.src = `dice-${dice}.png`;

    // 3. check for rolled 1 : if true switch to next player ;
    if (dice !== 1) {
      // add dice to current score ;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if players score is >=100;
    // finish the game
    if (scores[activePlayer] >= 20) {
      diceElem.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch the player
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", function () {
  init();
});
