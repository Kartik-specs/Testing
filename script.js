'use strict';

console.log('Hello World')
//Declaring variables

//Buttons
const btnNewGame = document.querySelector('#new-game');
const btnRollDice = document.querySelector('#roll-dice'); 
const btnHold = document.querySelector('#hold');

//Final Scores
const pOneFinalScore = document.querySelector('.player-one-score');
const pTwoFinalScore = document.querySelector('.player-two-score');

//Current Scores
const pOneCurrentScore = document.querySelector('.player-one-current-score');
const pTwoCurrentScore = document.querySelector('.player-two-current-score');

//Dice Faces 
const diceFaceOne = document.querySelector('.face-1');
const diceFaceTwo = document.querySelector('.face-2');
const diceFaceThree = document.querySelector('.face-3');
const diceFaceFour = document.querySelector('.face-4');
const diceFaceFive = document.querySelector('.face-5');
const diceFaceSix = document.querySelector('.face-6');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('#new-game').addEventListener('click', function() {
    alert(randomNumber);
});