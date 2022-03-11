// Get computer Selection 
function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
const computerSelection = computerPlay();



const playerSelection = "Rock";


// funciton to compare value and choose winner
function PlayRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case "Rock":
            if(computerSelection === "Rock"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
            }else if(computerSelection === "Paper"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
            }else {
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
            }


        case "Paper":
            if(computerSelection === "Paper"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
            }else if(computerSelection === "Scissors"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
            }else {
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
            }


        case "Scissors": 
            if(computerSelection === "Scissors"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
            }else if(computerSelection === "Rock"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
            }else {
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
            }
    }
}


const result = PlayRound(playerSelection, computerSelection);
console.log(result);