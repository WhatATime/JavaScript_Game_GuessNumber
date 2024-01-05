'use strict';

// Initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display the updated message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Implement "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number...');

    // When player wins
  } else if (guess === secretNumber) {
    // Adapt message
    displayMessage('🎉 Correct Number!');
    // Display secret number
    document.querySelector('.number').textContent = secretNumber;
    // Adapt styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;

      // Lose the game
    } else {
      displayMessage('❌ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Implement "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  // Restore hidden secret number
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Restore background color
  document.querySelector('body').style.backgroundColor = '#222';
  // Restore score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Restore message
  displayMessage('Start guessing...');
  // Empty input field
  document.querySelector('.guess').value = '';
});
