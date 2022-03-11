// Get computer Selection 
function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

let ComputerWins = 0;
let PlayerWins = 0;


// this function call 5 time the round and choose the winner based on total score
function PlayGame() {
    for(let i=0; i<5; i++){
        const result = PlayRound();
        console.log(result);
    }

    if(ComputerWins > PlayerWins){
        console.log("Computer Win the game!")
        return 
    }else if(PlayerWins > ComputerWins){
        console.log("Player Win the game!")
        return 
    }else {
        console.log("Nobody win the game")
        return
    }
}


// funciton to compare value and choose winner
function PlayRound() {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Coose Rock, Paper or Scissors!")

    switch(playerSelection){
        case "Rock":
            if(computerSelection === "Rock"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
            }else if(computerSelection === "Paper"){
                ComputerWins++;
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
            }else {
                PlayerWins++;
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
            }


        case "Paper":
            if(computerSelection === "Paper"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
            }else if(computerSelection === "Scissors"){
                ComputerWins++;
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
            }else {
                PlayerWins++;
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
            }


        case "Scissors": 
            if(computerSelection === "Scissors"){
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
            }else if(computerSelection === "Rock"){
                ComputerWins++;
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
            }else {
                PlayerWins++;
                return "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
            }
    }
}


PlayGame();