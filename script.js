
let computerScore = 0;
let playerScore = 0;

const scoreKeep = document.querySelector("#score-keep");
const feedback = document.createElement("p");
/* function that based on the current result keeps score and changes it in real time
 on the website */
function runningScore(text) {

    if (computerScore ===5){
        paragraph.textContent = "You lose, Computer wins!";
        resultsDiv.appendChild(paragraph);
    }
    else if (playerScore ===5){
        paragraph.textContent = "You win, Computer loses!";
        resultsDiv.appendChild(paragraph);
    }
     else if(text === "Draw"){
        feedback.textContent = `Score: Computer: ${computerScore} You: ${playerScore}`;
        scoreKeep.appendChild(feedback); 
    }
     else {
        if (text === "You win! Scissors beat Rock." ||
            text === "You win! Rock beats Scissors." ||
            text === "You win! Paper beats Rock.") {
      playerScore++;
    }
    else if (text === "You Lose! Paper beats Rock." ||
             text === "You lose! Scissors beats Paper." ||
             text === "You lose! Rock beats Scissors.") {
      computerScore++;
       
    }
      feedback.textContent = `Score: Computer: ${computerScore} You: ${playerScore}`;
      scoreKeep.appendChild(feedback);
    }   

  }


    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
   
    const resultsDiv = document.querySelector("#results");
    const paragraph = document.createElement("p");
    /* function that is used in button event listeners at line 62, 75 and 88
       to display and update the result of individual match under the score-keep */
    function updateResults(message){
    paragraph.textContent = message;
    resultsDiv.appendChild(paragraph);
  }
  
  rockButton.addEventListener("click", () => {
    
    const result = playRound("rock", getComputerChoice());
    updateResults(result);
    runningScore(result);
    if (computerScore >= 5) {
        resultsDiv.textContent = "You lose, Computer wins!";
    } else if (playerScore >= 5) {
        resultsDiv.textContent = "You win, Computer loses!";
    }
    

  });
  
  paperButton.addEventListener("click", () => {
    
    const result = playRound("paper", getComputerChoice());
    updateResults(result);
    runningScore(result);
    if (computerScore >= 5) {
        resultsDiv.textContent = "You lose, Computer wins!";
    } else if (playerScore >= 5) {
        resultsDiv.textContent = "You win, Computer loses!";
    }
    
    

  });
  
  scissorsButton.addEventListener("click", () => {
    
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    const result = playRound("scissors", getComputerChoice());
    updateResults(result);
    
    runningScore(result);
    if (computerScore >= 5) {
        resultsDiv.textContent = "You lose, Computer wins!";
    } else if (playerScore>= 5) {
        resultsDiv.textContent = "You win, Computer loses!";
    }
    
    

  });

// a function that gets a random choice of Rock, Paper or Scissors. 
  function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice= choices[randomIndex];
    return computerChoice;
}

// a function that plays a single round of Rock, Paper and Scissors.
function playRound(playerSelection, computerSelection) {
    const lowerCaseInput = playerSelection.toLowerCase();
if(computerSelection === lowerCaseInput){
    return "Draw";
}else if(computerSelection === "paper" && lowerCaseInput === "scissors"){
    return "You win! Scissors beat Rock.";
}else if(computerSelection === "paper" && lowerCaseInput === "rock"){
    return "You Lose! Paper beats Rock.";
}else if(computerSelection === "scissors" && lowerCaseInput === "rock"){
    return "You win! Rock beats Scissors.";
}else if(computerSelection === "scissors" && lowerCaseInput === "paper"){
    return "You lose! Scissors beats Paper.";
}else if(computerSelection === "rock" && lowerCaseInput === "paper"){
    return "You win! Paper beats Rock.";
}else if(computerSelection === "rock" && lowerCaseInput === "scissors"){ 
    return "You lose! Rock beats Scissors.";
}else{ 
    return "Input is wrong, please choose between rock, paper and scissors";
}
}
