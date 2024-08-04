'use strict';

document.querySelector('.score').textContent = 20;

let score = 20;
let number = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);

  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'You must guess between 1 and 20 dumbass😒';
  } else {
    if (!guess) {
      document.querySelector('.message').textContent = 'NO NUMBER😐';
    } else if (guess === number) {
      document.querySelector('.message').textContent = 'Correct number!😍';
      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').textContent = guess;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== number) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent =
          guess < number ? 'Too low!⬇️' : 'Too high!⬆️';
      } else {
        document.querySelector('.message').textContent = 'You dumb looser😂';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = ' red';
      }
    }
    // else if (guess < number) {
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.message').textContent = 'Too low!⬇️';
    //   } else {
    //     document.querySelector('.message').textContent = 'You dumb looser😂';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = ' red';
    //   }
    // } else if (guess > number) {
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.message').textContent = 'Too high!⬆️';
    //   } else {
    //     document.querySelector('.message').textContent = 'You dumb looser😂';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = ' red';
    //   }
    // }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
