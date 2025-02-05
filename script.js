// Rock Paper Scissors v0.0.1

// Declare a placeholder for user choice
let userChoice = 0;

// Declare a placeholder for computer choice
let cpuChoice = 0;

// Get and store user choice
userChoice = prompt();
let userResult = userChoice.toString()

console.log(userResult);

// Get and store cpu choice
function getCpuChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

cpuChoice = getCpuChoice();
let cpuValue = ["Rock", "Paper", "Scissors"];
let cpuResult = cpuValue[cpuChoice - 1];

console.log(cpuResult);
