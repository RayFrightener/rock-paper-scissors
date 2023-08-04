function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice= choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
if(playerSelection === computerSelection){
    let result = "The match is a draw, both parties chose the same option."
    return result;
}
else if(computerSelection === "paper" && playerSelection === "scissor"){
    let result = "You win! Scissors beat Rock.";
    return result;
}
else if(computerSelection === "paper" && playerSelection === "rock"){
    let result = "You Lose! Paper beats Rock.";
    return result;
}
 else if(computerSelection === "scissor" && playerSelection === "rock"){
    let result = "You win! Rock beats Scissor.";
    return result;
}
else if(computerSelection === "scissor" && playerSelection === "paper"){
    let result = "You lose! Scissor beats Paper.";
    return result;
}
else if(computerSelection === "rock" && playerSelection === "paper"){
    let result = "You win! Paper beats Rock.";
    return result;
}
else if(computerSelection === "rock" && playerSelection === "scissor"){
    let result = "You lose! Rock beats Scissor.";
    return result;
} else{
    let result = "Input is wrong, please choose between rock, paper and scissor";
    return result;
}

}


const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));