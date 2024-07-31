'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  //1.generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. 1: switch to next player
  if (dice !== 1) {
    // add dice to current
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //call function
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1.add current score to the active players score
  // console.log('clicked hold button')
  scores[activePlayer] += currentScore;
  console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2.  100 > ?

  if (scores[activePlayer] == 20) {
    //finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
  } else {
    // if no switch the player
    switchPlayer();
  }
});
