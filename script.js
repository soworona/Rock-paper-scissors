const choices = ["rock", 'paper', 'scissors'];

function getComputerChoice() {
 return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
let humanSelects = prompt("Enter your choice: rock, paper or scissors? ").toLowerCase();
return humanSelects;
}

let humanScore = 0, computerScore = 0;

function playRound( humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice =="rock"){
            return( "Tie.");
        }else if (humanChoice == "rock" && computerChoice =="scissors"){
            humanScore++;
            return("Human wins.");

        }else if (humanChoice == "rock" && computerChoice =="paper"){
            computerScore++;
            return("Computer wins.");
        }
        
        else if (humanChoice == "paper" && computerChoice =="rock"){
            humanScore++;
            return("Human wins.");
        }else if (humanChoice == "paper" && computerChoice =="scissors"){
            computerScore++;
            return("Computer wins.");
        }else if (humanChoice == "paper" && computerChoice =="paper"){
            return("Tie.");
        }
        
        else if (humanChoice == "scissors" && computerChoice =="rock"){
            humanScore++;
            return("Computer wins.");
        }else if (humanChoice == "scissors" && computerChoice =="paper"){
            humanScore++;
            return("Human wins.");
        }else if (humanChoice == "scissors" && computerChoice =="scissors"){
           return("Tie");
        }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`Human: ${humanSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
    } 

    console.log("Final result: ");
    console.log(`Human : ${humanScore}  Computer : ${computerScore}`)
    if(humanScore > computerScore){
        console.log("human");
    }else if(humanScore < computerScore){
        console.log("Winner: Computer");
    }else{
        console.log("No winners");
    }
} 



playGame();





