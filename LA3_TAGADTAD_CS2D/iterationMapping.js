// Prompt the user to input the Max Limit of the Loops
const prompt = require('prompt-sync')();
const maxLimit = parseInt(prompt('Enter the Limit of the Double Loop: '));

// Initialize counters and variables
for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        // Calculate the added value
        let addedValue = i + j;
        // Log the loop points and added value
        console.log(`[${i}] [${j}] Added value is ${addedValue}`);
    }
}
