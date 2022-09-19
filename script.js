//layout and elements//

console.log("Hello, World!")

let showItemsCounter = 0;
const globalInterval = 1000;
let buttCounter = 0;
const titles = document.querySelector("#titles");

showItems = setInterval(function() {
  if (showItemsCounter < 7) {
    showText();
    showItemsCounter ++;
    console.log(showItemsCounter);}
  else {
    console.log("Now I should break the loop");
    
    setTimeout(showButtons, globalInterval);
    clearInterval(showItems);
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
  const selectAreaOne = document.querySelector("#container");
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id","button-div")
  selectAreaOne.append(buttonDiv);
  
  const newButtonInterval = setInterval(function(){
    const selectAreaTwo = document.querySelector("#button-div");
    if (rpsCounter === 0) {
      createButt("ROCK");
      rpsCounter ++;
      console.log("I should show button 1")
    } else if (rpsCounter === 1) {
      createButt("PAPER");
      rpsCounter ++;
      console.log("I should show button 2")
    } else {
      createButt("SCISSORS");
      console.log("I should show button 3")
      clearInterval(newButtonInterval);
      
    }
    
    
  }, globalInterval)
}

setTimeout(clearText, globalInterval * 10);

function clearText() {
  
  console.log("clearText() activated!");
  const hideText = document.querySelectorAll("p.paragraph");
  console.log(hideText[0]);
  
  for (let i = 0; i < 6; i++) {
    hideText[i].classList.remove("fadein");
    hideText[i].classList.add("fadeout");
    setTimeout(function() {
    hideText[i].classList.add("hidden");
    hideText[i].remove();
    }, globalInterval)
  } 
}

function hideScore() {
  console.log("hide score activated!");
  const texts = document.querySelectorAll(".result");
  texts.forEach(text => {
    text.classList.add("fadeout");
    text.remove();
  })

}

function createButt(option) {
  buttCounter ++;
  console.log(buttCounter);
  const input = document.createElement('p');
  input.textContent = option;
  input.classList.add("option", "fadein")
  document.querySelector('#button-div').appendChild(input);
  input.setAttribute('id', `butt${buttCounter}`);
  let clickCounter = 0;
  input.addEventListener('click', () => {
    clickCounter ++;
    console.log(clickCounter);
    playRound();
  })
}

function checkWinner() {
  const titlesDiv = document.querySelector("#titles");
  const winner = document.createElement('p');
  if (userWins === 5) { 
    hideScore();
    winner.textContent = "CONGRATULATIONS! You win. Humanity is saved!";
    titlesDiv.append(winner);
    
  } else if (computerWins === 5) {
    hideScore();
    winner.textContent = "OH NOES! The machines' champion has won. Humanity will be destroyed :(";
    titlesDiv.append(winner);
    
  }
}


function showResult(result, score) {
  console.log("showResult activated!");
  const titlesDiv = document.querySelector("#titles");
  const newResult = document.createElement('p');
  newResult.textContent = result + score;
  newResult.classList.add("result");
  newResult.setAttribute('id', 'oldResult');
  titlesDiv.append(newResult);
  checkWinner();
  
}

//game logic//

let userWins = 0;
let computerWins = 0;
let drawCount = 0;
let roundCounter = 0;
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

function playRound(id) {
  if (roundCounter > 0) {
    hideScore();
  }
  roundCounter ++;
  console.log("This is round", roundCounter);
  console.log("Playing a round!");
  if (id === butt1) {
    userChoice = "rock";
    
  } else if (id === butt2) {
    userChoice = "paper";
  } else {
    userChoice = "scissors";
  }
  
  cpuChoice = getComputerChoice();
  if (userChoice === cpuChoice) {
    console.log("Round completed!")
    const string = "This round is a draw! ";
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    showResult(string, score); 
    return;
  }
  
  roundString = userChoice + cpuChoice;
  if (roundString === "rockpaper") {
    
    computerWins ++;
    const string = "Paper beats rock! Computer wins this round! ";
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    
    showResult(string, score); 
    return;
  } else if (roundString === "rockscissors") {
    userWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Rock beats scissors! Player wins this round! "
    showResult(string, score); 
    return;
  } else if (roundString === "paperrock") {
    userWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string ="Paper beats rock! Player wins this round! "
    showResult(string, score); 
    return;
  } else if (roundString === "paperscissors") {
    computerWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Scissors beats paper! Computer wins this round! ";
    showResult(string, score); 
    return;
  } else if (roundString === "scissorsrock") {
    computerWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Rock beats scissors! Computer wins this round! ";
    showResult(string, score); 
    return;
  } else if (roundString === "scissorspaper") {
    userWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Scissors beats paper! User wins this round! ";
    showResult(string, score); 
    return;
  } else {
    
    showResult(string, score); 
    return;
    
  }
}

/*function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log("Final score is Player - ", userWins, "| Computer - ", computerWins);
  return("Game over.");
}
*/



