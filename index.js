#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1290;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Please enter your pin",
        type: "number"
    }]); //12345 ===1234 false
if (pinAnswer.pin === myPin) {
    console.log(`Correct pin number!`);
}
else {
    console.log(`Your pin number is not valid`);
}
//select the choice
let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "Please select the option",
        type: "list",
        choices: ["Withdraw", "Check balance"]
    }]);
console.log(operationAns);
//for check the balance amount
if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Please enter your amount",
            type: "number"
        }]);
    // -=,==,+=
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is :" + myBalance);
}
else if (operationAns.operation === "Check balance ") {
    console.log(`Your balance is:` + myBalance);
}
else {
    console.log(`Incorrect pin number`);
}