#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("               [WELLCOME]");
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "please guess a number btween 1 to 6",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log(`congtratulation you'r guessed right`);
}
else {
    console.log(`you'r guessted wrong`);
}
