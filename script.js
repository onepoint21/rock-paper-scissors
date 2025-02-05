// Rock Paper Scissors v0.0.1

// Keeping Score
let userScore = 0;
let cpuScore = 0;

// Get user choice
function getUserChoice() {
    let validChoices = ["Rock", "Paper", "Scissors"];
    let userInput;

    do {
        userInput = prompt("Enter Rock, Paper, or Scissors:").trim().toLowerCase();
        userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    } while (!validChoices.includes(userInput));

    return userInput;
}

// Get CPU choice
function getCpuChoice() {
    let cpuValue = ["Rock", "Paper", "Scissors"];
    return cpuValue[Math.floor(Math.random() * 3)]; // Directly return "Rock", "Paper", or "Scissors"
}

// Play a single round
function playRound() {
    let userChoice = getUserChoice();
    let cpuChoice = getCpuChoice();

    console.log("You chose:", userChoice);
    console.log("Computer chose:", cpuChoice);

    if (userChoice === cpuChoice) {
        console.log("It's a tie! Play again!");
        return "tie";
    } else if (
        (userChoice === "Rock" && cpuChoice === "Scissors") ||
        (userChoice === "Scissors" && cpuChoice === "Paper") ||
        (userChoice === "Paper" && cpuChoice === "Rock")
    ) {
        userScore++;
        console.log("You win! Ready to play another round?");
        return "win";
    } else {
        cpuScore++;
        console.log("Computer wins! Ready to play another round?");
        return "lose";
    }
}

// Run the game loop (Best of 5 - First to 3 Wins)
while (userScore < 3 && cpuScore < 3) {
    playRound();
}

// Display the final result
if (userScore === 3) {
    console.log("Game over! You win!");
} else {
    console.log("Game over! Computer wins!");
}
