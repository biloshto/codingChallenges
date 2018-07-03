// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game).
1. Create variable for the heights and ages of two friends and assign them some values.
2. Calculate their scores.
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).
EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision.
*/

const faHeight = 175;
const faAge = 23;

const fbHeight = 168;
const fbAge = 25;

const fcHeight = 172;
const fcAge = 24;

const scoreA = faHeight + 5 * faAge;
const scoreB = fbHeight + 5 * fbAge;
const scoreC = fcHeight + 5 * fcAge;

//  if(scoreA > scoreB) {
//    console.log("Friend A wins the game with " + scoreA + " points. Friend B's score is " + scoreB + ".");
//  } else if(scoreB > scoreA) {
//    console.log("Friend B wins the game with " + scoreB + " points. Friend A's score is " + scoreA + ".");
//  } else {
//    console.log('It\'s a draw!');
//  }

if(scoreA > scoreB && scoreA > scoreC) {
  console.log("Friend A wins the game with " + scoreA + " points. Friend B's score is " + scoreB + ", and Friend C's score is " + scoreC + ".");
} else if(scoreB > scoreA && scoreB > scoreC) {
  console.log("Friend B wins the game with " + scoreB + " points. Friend A's score is " + scoreA + ", and Friend C's score is " + scoreC + ".");
} else if(scoreC > scoreA && scoreC > scoreB) {
  console.log("Friend C wins the game with " + scoreC + " points. Friend A's score is " + scoreA + ", and Friend B's score is " + scoreB + ".");
} else {
  console.log('It\'s a draw!');
}