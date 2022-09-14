console.log("Hello, World!")
let userWins = 0;
let computerWins = 0;
let drawCount = 0;
function getComputerChoice() {
  let computerNum;
  let computerSelection; 
  computerNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (computerNum < 2) {
    computerChoice = "rock";
    
  } else if (computerNum < 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors"
  }
  console.log("Computer chooses: " , computerChoice);
  return(computerChoice);
}

function getUserChoice() {
  let userInput = window.prompt("Please enter rock, paper, or scissors.");
  userInput = userInput.toLowerCase();
  console.log(userInput);
  console.log("Player chooses: " , userInput);
  return(userInput)
}

function playRound() {
  userChoice = getUserChoice();
  cpuChoice = getComputerChoice();
  if (userChoice === cpuChoice) {
    console.log("This round is a draw!");
    return ("Round completed!");
  }
  
  roundString = userChoice + cpuChoice;
  if (roundString === "rockpaper") {
    computerWins ++;
    console.log("Score: Player - ", userWins, "| Computer - ", computerWins);
    console.log("Paper beats rock! Computer wins this round!");
    return;
  } else if (roundString === "rockscissors") {
    userWins ++;
    console.log("Score: Player - ", userWins, "| Computer - ", computerWins);
    console.log("Rock beats scissors! Player wins this round!");
    return;
  } else if (roundString === "paperrock") {
    userWins ++;
    console.log("Score: Player - ", userWins, "| Computer - ", computerWins);
    console.log("Paper beats rock! Player wins this round!");
    return;
  } else if (roundString === "paperscissors") {
    computerWins ++;
    console.log("Score: Player - ", userWins, "| Computer - ", computerWins);
    console.log("Scissors beats paper! Computer wins this round!");
    return;
  } else if (roundString === "scissorsrock") {
    computerWins ++;
    console.log("Score: Player - ", userWins, "| Computer - ", computerWins);
    console.log("Rock beats scissors! Computer wins this round!");
    return;
  } else if (roundString === "scissorspaper") {
    userWins ++;
    console.log("Score: Player - ", userWins, "| Computer - ", computerWins);
    console.log("Scissors beats paper! User wins this round!");
    return;
  } else {
    console.log("You have entered an invalid input. Please try again.");
    return;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log("Final score is Player - ", userWins, "| Computer - ", computerWins);
  return("Game over.");
}

setTimeout(function(){
  document.getElementById("rock-img-container").className = "";
 }, 1500);

 setTimeout(function(){
  document.getElementById("paper-img-container").className = "";
 }, 3500);

 setTimeout(function(){
  document.getElementById("scis-img-container").className = "";
 }, 5500);

 setTimeout(function(){
  document.getElementById("cont-btn-container").className = "";
 }, 7500);
