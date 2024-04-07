#! /usr/bin/env node
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
var questions = [{
    name: "from",
    type: "list",
    message: "Enter From Currency",
    choices: ["USD", "PKR", "INR", "GBP", "EUR", "DIN"]
},
{
    name: "in",
    type: "list",
    message: "Select the currency you want to convert in",
    choices: ["USD", "PKR", "INR", "GBP", "EUR", "DIN"]
}, {
    name: "amount",
    type: "number",
    message: "Enter the amount you want to convert"
}]

const currency: any = {
    USD: 1, //Base currency
    EUR: 0.92,
    INR: 83.30,
    PKR: 277.54,
    GBP: 0.79,
    DIN: 0.31
}

var answers = await inquirer.prompt(questions)
var fromAmount = currency[answers.from];
var inAmount = currency[answers.in]
var amount = answers.amount
var baseAmount = amount / fromAmount;
var result = baseAmount * inAmount;
var finalResult = result.toFixed(2)
console.log(finalResult);