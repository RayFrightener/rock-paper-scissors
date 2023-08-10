function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice= choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const lowerCaseInput = playerSelection.toLowerCase();
if(computerSelection === lowerCaseInput){
    return "Draw";
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


function userInput(){
    let input = window.prompt("Choose between Rock, Paper and Scissors: ");
    return input;
}

function wrongInput(){
    let rightInput = window.prompt("Please select a valip weapon: ");
    return rightInput;
    
}

function game(){
    let userChoice = userInput();
    const computerChoice = getComputerChoice();
    let userScore = 0;
    let computerScore = 0;
    let match1 = playRound(userChoice,computerChoice);
    if(match1 === "You win! Scissors beat Rock." || 
    match1 === "You win! Rock beats Scissor." ||
    match1 ===  "You win! Paper beats Rock."){
        userScore++;
    }else if(match1 === "You Lose! Paper beats Rock."|| match1 === "You lose! Scissor beats Paper."|| match1 === "You lose! Rock beats Scissor." ) {
        computerScore++;
    } else{
        let rightInput = wrongInput().toLocaleLowerCase();
        let rematch = playRound(rightInput,computerChoice);
        if(rematch === "You win! Scissors beat Rock." || 
    rematch === "You win! Rock beats Scissor." ||
    rematch ===  "You win! Paper beats Rock."){
        userScore++;
    } else if(rematch === "You Lose! Paper beats Rock."|| rematch === "You lose! Scissor beats Paper."|| rematch === "You lose! Rock beats Scissor." ) {
        computerScore++;
    }

    }
    console.log("The score is Computer-" + computerScore + " You-" + userScore );
    let userchoice2 = userInput();
    let match2 = playRound(userchoice2,computerChoice);
    if(match2 === "You win! Scissors beat Rock." || 
    match2 === "You win! Rock beats Scissor." ||
    match2 ===  "You win! Paper beats Rock."){
        userScore++;
    }else if(match2 === "You Lose! Paper beats Rock."|| match2 === "You lose! Scissor beats Paper."|| match2 === "You lose! Rock beats Scissor." ) {
        computerScore++;
    } else{
    }
    console.log("The score is: Computer-" + computerScore + " You-" + userScore );
    
    let userchoice3 = userInput();
    let match3 = playRound(userchoice3,computerChoice);
    if(match3 === "You win! Scissors beat Rock." || 
    match3 === "You win! Rock beats Scissor." ||
    match3 ===  "You win! Paper beats Rock."){
        userScore++;
    }else if(match3 === "You Lose! Paper beats Rock."|| match3 === "You lose! Scissor beats Paper."|| match3 === "You lose! Rock beats Scissor." ) {
        computerScore++;
    } else{
    }
    console.log("The score is: Computer-" + computerScore + " You-" + userScore );
    let userchoice4 = userInput();
    let match4 = playRound(userchoice4,computerChoice);
    if(match4 === "You win! Scissors beat Rock." || 
    match4 === "You win! Rock beats Scissor." ||
    match4 ===  "You win! Paper beats Rock."){
        userScore++;
    }else if(match4 === "You Lose! Paper beats Rock."|| match4 === "You lose! Scissor beats Paper."|| match4 === "You lose! Rock beats Scissor." ) {
        computerScore++;
    } else{
    }
    console.log("The score is: Computer-" + computerScore + " You-" + userScore );
    let userchoice5 = userInput();
    let match5 = playRound(userchoice5,computerChoice);
    if(match5 === "You win! Scissors beat Rock." || 
    match5 === "You win! Rock beats Scissor." ||
    match5 ===  "You win! Paper beats Rock."){
        userScore++;
    }else if(match5 === "You Lose! Paper beats Rock."|| match5 === "You lose! Scissor beats Paper."|| match5 === "You lose! Rock beats Scissor." ) {
        computerScore++;
    } else{
    }
    console.log("The score is: Computer-" + computerScore + " You-" + userScore );
    if(userScore>computerScore){
        console.log("The winner is you! with the score of:" + userScore + "|" + computerScore);
    } else{
        console.log("Computer won with the score of:" + computerScore+"|"+userScore);
    }
}

game();