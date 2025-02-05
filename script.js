// Rock Paper Scissors v0.0.1

// Declare a placeholder for user choice
let userChoice = 0;

// Declare a placeholder for computer choice
let cpuChoice = 0;


userChoice = prompt();

console.log(userChoice);

function getCpuChoice() {
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    return cpuChoice;
}

let cpuResult = getCpuChoice(cpuChoice);

console.log(cpuResult);
