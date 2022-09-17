//layout and elements//

console.log("Hello, World!")

let showItemsCounter = 0;
const globalInterval = 200;
let imgCounter = 0;
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

function hideText() {
  console.log("hideText triggered");
  const selectParas = document.getElementsByClassName("paragraph");  
  item = selectParas[0];
  item.classList.add("hidden");
  item.classList.remove("paragraph");
  return;
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
      createBtn("rock");
      rpsCounter ++;
      console.log("I should show button 1")
    } else if (rpsCounter === 1) {
      createBtn("paper");
      rpsCounter ++;
      console.log("I should show button 2")
    } else {
      createBtn("scis");
      console.log("I should show button 3")
      clearInterval(newButtonInterval);
    }
    
  }, 700)
  
}

function clearText() {
  console.log("clearText activated!");
  const hideText = document.querySelectorAll("p.paragraph");
  console.log(hideText[0]);
  for (let i = 0; i < 7; i++) {
    hideText[i].classList.remove("fadein");
    hideText[i].classList.add("fadeout");
    setTimeout(function() {
    hideText[i].classList.add("hidden");
    }, 2000)
  } 
}

function createBtn(img) {
  imgCounter ++;
  console.log(imgCounter);
  let input = document.createElement('input');
  input.setAttribute('type', 'image');
  const imgSrc = `./${img}.png`;
  input.setAttribute('src', imgSrc);
  input.classList.add("option", "fadein")
  document.querySelector('#button-div').appendChild(input);
  input.setAttribute('id', `img${imgCounter}`);
  input.addEventListener('click', () => {
    
    playRound(input.id);
    console.log(input.id);
    clearText();

  }); 
}

function showResult(result, score) {
  console.log("showResult activated!");
  titlesDiv = document.querySelector("#titles");
  titlesDiv.append(result);
  titlesDiv.append(score);
}

//game logic//

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

function playRound(id) {
  
  if (id === img1) {
    userChoice = "rock";
    
  } else if (id === img2) {
    userChoice = "paper";
  } else {
    userChoice = "scissors";
  }
  
  cpuChoice = getComputerChoice();
  if (userChoice === cpuChoice) {
    console.log("This round is a draw!");
    console.log("Round completed!")
    return;
  }
  
  roundString = userChoice + cpuChoice;
  if (roundString === "rockpaper") {
    computerWins ++;
    const string = "Paper beats rock! Computer wins this round!";
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    showResult(string, score); 
    return;
  } else if (roundString === "rockscissors") {
    userWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Rock beats scissors! Player wins this round!"
    showResult(string, score); 
    return;
  } else if (roundString === "paperrock") {
    userWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string ="Paper beats rock! Player wins this round!"
    showResult(string, score); 
    return;
  } else if (roundString === "paperscissors") {
    computerWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Scissors beats paper! Computer wins this round!";
    showResult(string, score); 
    return;
  } else if (roundString === "scissorsrock") {
    computerWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Rock beats scissors! Computer wins this round!";
    showResult(string, score); 
    return;
  } else if (roundString === "scissorspaper") {
    userWins ++;
    const score = `Score: Player - ${userWins} | Computer - ${computerWins}`;
    const string = "Scissors beats paper! User wins this round!";
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



