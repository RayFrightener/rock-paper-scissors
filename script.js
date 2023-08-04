function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice= choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const lowerCaseInput = playerSelection.toLowerCase();
if(computerSelection === lowerCaseInput){
    return "The match is a draw, both parties chose the same option.";
}else if(computerSelection === "paper" && lowerCaseInput === "scissor"){
    return "You win! Scissors beat Rock.";
}else if(computerSelection === "paper" && lowerCaseInput === "rock"){
    return "You Lose! Paper beats Rock.";
}else if(computerSelection === "scissor" && lowerCaseInput === "rock"){
    return "You win! Rock beats Scissor.";
}else if(computerSelection === "scissor" && lowerCaseInput === "paper"){
    return "You lose! Scissor beats Paper.";
}else if(computerSelection === "rock" && lowerCaseInput === "paper"){
    return "You win! Paper beats Rock.";
}else if(computerSelection === "rock" && lowerCaseInput === "scissor"){ 
    return "You lose! Rock beats Scissor.";
}else{ 
    return "Input is wrong, please choose between rock, paper and scissor";
}

}


const playerSelection = "RoCk";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));