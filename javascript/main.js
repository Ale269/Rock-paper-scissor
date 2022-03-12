let ComputerWins = 0;
let PlayerWins = 0;
let RoundPlayed = 0;
let playerSelection = "";
let displayPlayerWins = document.getElementById("player-win-counter");
let displayComputerWIns = document.getElementById("computer-win-counter");
let displayResult = document.getElementById("game-round-result");
let displayRoundCount = document.getElementById("round-counter");
displayComputerWIns.textContent = ComputerWins;
displayPlayerWins.textContent = PlayerWins;

// start the game with proper player value
document.querySelectorAll(".start-the-game").forEach((element) => {
    element.addEventListener("click", () => {
        if(ComputerWins < 5 && PlayerWins < 5){
            PlayRound(element.value)
        }
    });
})


// Get computer Selection 
function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


// Compare value and choose winner
function PlayRound(element) {
    const computerSelection = computerPlay();
    playerSelection = element;
    RoundPlayed++;
    displayRoundCount.textContent = "Round: " + RoundPlayed;

    switch(playerSelection){
        case "Rock":
            if(computerSelection === "Rock"){
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
                break
            }else if(computerSelection === "Paper"){
                ComputerWins++;
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
                displayComputerWIns.textContent = ComputerWins;
                displayPlayerWins.textContent = PlayerWins;
                break
            }else {
                PlayerWins++;
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
                displayComputerWIns.textContent = ComputerWins;
                displayPlayerWins.textContent = PlayerWins;
                break
            }


        case "Paper":
            if(computerSelection === "Paper"){
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
                break
            }else if(computerSelection === "Scissors"){
                ComputerWins++;
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
                displayComputerWIns.textContent = ComputerWins;
                displayPlayerWins.textContent = PlayerWins;
                break
            }else {
                PlayerWins++;
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
                displayComputerWIns.textContent = ComputerWins;
                displayPlayerWins.textContent = PlayerWins;
                break
            }


        case "Scissors": 
            if(computerSelection === "Scissors"){
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". Nobody win";
                break
            }else if(computerSelection === "Rock"){
                ComputerWins++;
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". The computer Win!";
                displayComputerWIns.textContent = ComputerWins;
                displayPlayerWins.textContent = PlayerWins;
                break
            }else {
                PlayerWins++;
                displayResult.textContent = "you choosed: " + playerSelection + ", the computer choosed: " + computerSelection + ". You Win!";
                displayComputerWIns.textContent = ComputerWins;
                displayPlayerWins.textContent = PlayerWins;
                break
            }
    }

    if(ComputerWins === 5) {
        displayResult.textContent = "The computer win the Game!";
    }else if(PlayerWins === 5){
        displayResult.textContent = "The Player win the Game!";
    }
}


