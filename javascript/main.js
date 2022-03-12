let ComputerWins = 0;
let PlayerWins = 0;
let playerSelection = "";

// start the game with proper player value
document.querySelectorAll(".start-the-game").forEach((element) => {
    element.addEventListener("click", () => {PlayRound(element.value)});
})

// Get computer Selection 
function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// Call 5 time the round and choose the winner based on total score
function PlayGame() {
    ComputerWins = 0;
    PlayerWins = 0;
    
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


// Compare value and choose winner
function PlayRound(element) {
    const computerSelection = computerPlay();
    playerSelection = element;

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


