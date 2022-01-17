'use strict';
/*
NOTE
DOM stands for document object model; structured representation of html documents. Allows
javascript to access html elements and styles to manipulate them. 
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 18; 
document.querySelector('.guess').value = 45;
console.log(document.querySelector('.guess').value); 
*/
// setting a random number ;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// again click handling
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// check click handling
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  // if no input is given in the input
  if (!guess) {
    displayMessage('😏😠No number !');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // implementing the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' High' : 'Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
