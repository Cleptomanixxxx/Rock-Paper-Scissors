const rpc = ["Rock", "Paper", "Scissors"];

let playerInput = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
let computerInput = getComputerChoice();

function getComputerChoice() {
  return rpc[Math.floor(Math.random() * rpc.length)].toLowerCase();
}

function playRPC(playerInput, computerInput) {
  if (playerInput === computerInput) {
    return "It's a Tie!";
  } else if (playerInput === "rock" && computerInput === "paper") {
    return "You loose! Paper beats Rock!";
  } else if (playerInput === "rock" && computerInput === "scissors") {
    return "You win! Rock beats Scissors!";
  } else if (playerInput === "paper" && computerInput === "rock") {
    return "You win! Paper beats Rock!";
  } else if (playerInput === "paper" && computerInput === "scissors") {
    return "You loose! Scissors beats Paper!";
  } else if (playerInput === "scissors" && computerInput === "paper") {
    return "You win! Scissors beats Paper!";
  } else if (playerInput === "scissors" && computerInput === "rock") {
    return "You Loose! Rock beats Scissors!";
  }
}

console.log(playRPC(playerInput, computerInput));
