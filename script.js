// Rock Paper Scissors v0.0.1

// Declare a placeholder for user choice
let userChoice = 0;

// Declare a placeholder for computer choice
let cpuChoice = 0;

// Get and store user choice
function getUserChoice() {
    let validChoices = ["Rock", "Paper", "Scissors"];
    let userInput = prompt("Enter Rock, Paper, or Scissors:").trim().toLowerCase();

    // Capitalize first letter
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);

    // Validate input
    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:").trim().toLowerCase();
        userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    }

    return userInput;
}

userChoice = getUserChoice();

// Get and store cpu choice
function getCpuChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

cpuChoice = getCpuChoice();
let cpuValue = ["Rock", "Paper", "Scissors"];
let cpuResult = cpuValue[cpuChoice - 1];

// Keeping Score
let userScore = 0;
let cpuScore = 0;

// Play the game in a single round
function playRound(userChoice, cpuResult) {
    console.log("You chose:", userChoice);
    console.log("Computer chose:", cpuResult);

    if (userChoice === cpuResult) {
        console.log("It's a tie! Play again!");
        return "tie";
    } else if (
        (userChoice === "Rock" && cpuResult === "Scissors") ||
        (userChoice === "Scissors" && cpuResult === "Paper") ||
        (userChoice === "Paper" && cpuResult === "Rock")
    ) {
        userScore++;
        console.log("You win! Ready for the next round?");
        return "win";
    } else {
        cpuScore++;
        console.log("Computer wins! Ready for the next round?");
        return "lose";
    }
}


