'use strict';

// Initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Implement "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number...';

    // When player wins
  } else if (guess === secretNumber) {
    // Adapt message
    document.querySelector('.message').textContent = 'Correct Number!';
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

    // When guess is too high
  } else if (guess > secretNumber) {
    // Decrease the score
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;

      // Lose the game
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    // Decrease the score
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;

      // Lose the game
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Implement "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial states
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
  document.querySelector('.message').textContent = 'Start guessing...';
  // Empty input field
  document.querySelector('.guess').value = '';
});
