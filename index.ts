#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Guess the Number Game")

const randomNumber = Math.floor(Math.random()* 5 + 1)
let number = await inquirer.prompt([
    {
    name: "userNumber",
    type: "number",
    message: "Enter your number from( 1 to 5):",
},
])
if(number.userNumber == randomNumber ){
    console.log("Congratulation! You Won" )
}
else{
    console.log("Try Again")
}