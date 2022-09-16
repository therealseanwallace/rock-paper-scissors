console.log("Hello, World!")

let showItemsCounter = 0;
let rpsCounter = 0;
const globalInterval = 200;

myInterval = setInterval(function() {
  let imgName;
  if (showItemsCounter < 7) {
    showText();
    showItemsCounter ++;
    console.log(showItemsCounter);}
  else {
    console.log("Now I should break the loop")
    showButtons();
    clearInterval(myInterval);
  }

}, globalInterval)

function showText() {
  const selectParas = document.getElementsByClassName("hidden");
  const item = selectParas[0];
  item.classList.remove("hidden");
  item.classList.add("fadein");
  
}

function showButtons() {
  console.log("Show buttons activated")
  let rpsCounter = 0;
  const selectAreaOne = document.querySelector("#game-area");
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id","button-div")
  selectAreaOne.append(buttonDiv);
  
  const newButtonInterval = setInterval(function(){
    const selectAreaTwo = document.querySelector("#button-div");
    if (rpsCounter === 0) {
      createImg("rock");
      rpsCounter ++;
      console.log("I should show button 1")
    } else if (rpsCounter === 1) {
      createImg("paper");
      rpsCounter ++;
      console.log("I should show button 2")
    } else {
      createImg("scis");
      console.log("I should show button 3")
      clearInterval(newButtonInterval);
    }
    
  }, globalInterval)
  
}



function createImg(img) {
  let image = document.createElement('img');
  const imgSrc = `./${img}.png`;
  image.src = imgSrc;
  image.classList.add("option", "hidden", "fadein")
  document.querySelector('#game-area').appendChild(image);
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



