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
console.log("You chose:", userChoice);

// Get and store cpu choice
function getCpuChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

cpuChoice = getCpuChoice();
let cpuValue = ["Rock", "Paper", "Scissors"];
let cpuResult = cpuValue[cpuChoice - 1];

console.log("Computer chose:", cpuResult);

// Set win conditional

