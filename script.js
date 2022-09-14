console.log("Hello, World!")


const line1 = "The year is 1988. The machines have destroyed human civilization."
const line2 = "Only a handful of humans survive. But the machines have offered a reprieve."
const line3 = "If YOU can beat their best AI in a game of rock, paper, scissors, they will allow the last humans to live."
const line4 = "No hard feelings."

setTimeout(function() { text(line1, ".typewriter1") }, 3000);
setTimeout(function() { text(line2), ".typewriter2" }, 6000);
setTimeout(function() { text(line3), ".typewriter3" }, 9000);
setTimeout(function() { text(line4), ".typewriter4" }, 15000);

function text(texts, newClass) {
  const textBox = document.querySelector('.text-box');
  const newLine = document.createElement("p");
  newLine.classList.add('typewriter', newClass)
  newLine.textContent = texts;
  newLine.style.color = "red";
  textBox.append(newLine);
}

function textFade() {
  const select = document.querySelector('.typewriter');
  
}

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



