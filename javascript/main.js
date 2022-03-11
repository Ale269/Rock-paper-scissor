function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    console.log(computerChoice[Math.floor(Math.random() * computerChoice.length)]);
}

computerPlay();