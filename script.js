const rpc = ["Rock", "Paper", "Scissors"];

let playerInput = undefined;
let computerInput = undefined;
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
  return rpc[Math.floor(Math.random() * rpc.length)].toLowerCase();
}

function playRound(playerInput, computerInput) {
  if (playerInput === computerInput) {
    return "It's a Tie!";
  } else if (playerInput === "rock" && computerInput === "paper") {
    scoreComputer++;
    return "You loose! Paper beats Rock!";
  } else if (playerInput === "rock" && computerInput === "scissors") {
    scorePlayer++;
    return "You win! Rock beats Scissors!";
  } else if (playerInput === "paper" && computerInput === "rock") {
    scorePlayer++;
    return "You win! Paper beats Rock!";
  } else if (playerInput === "paper" && computerInput === "scissors") {
    scoreComputer++;
    return "You loose! Scissors beats Paper!";
  } else if (playerInput === "scissors" && computerInput === "paper") {
    scorePlayer++;
    return "You win! Scissors beats Paper!";
  } else if (playerInput === "scissors" && computerInput === "rock") {
    scoreComputer++;
    return "You Loose! Rock beats Scissors!";
  }
}

function game() {
  for (let games = 0; games < 5; games++) {
    let playerInput = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
    let computerInput = getComputerChoice();
    console.log(playRound(playerInput, computerInput));
  }
  if (scoreComputer > scorePlayer) {
    return `Computer wins with ${scoreComputer} Points vs. ${scorePlayer} Points!`;
  } else if (scoreComputer < scorePlayer) {
    return `You win with ${scorePlayer} Points vs. ${scoreComputer} Points!`;
  } else return `It's a tie! ${scoreComputer} Points vs. ${scorePlayer} Points`;
}

console.log(game());
