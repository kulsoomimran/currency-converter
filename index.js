#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    AED: 3.67,
    BDT: 117.53,
    EUR: 0.92,
    INR: 83.21,
    IQD: 1312.07,
    PKR: 278.84,
    USD: 1,
};
let answer = await inquirer.prompt([
    {
        message: chalk.blue("Chosse the currency you want to convert"),
        name: "from",
        type: "list",
        choices: [
            "AED",
            "BDT",
            "EUR",
            "INR",
            "IQD",
            "PKR",
            "USD"
        ],
    },
    {
        message: chalk.cyan("Chosse the currency you want to convert in"),
        name: "to",
        type: "list",
        choices: [
            "AED",
            "BDT",
            "EUR",
            "INR",
            "IQD",
            "PKR",
            "USD"
        ],
    },
    {
        message: chalk.green("Please enter the Amount: "),
        name: "amount",
        type: "number",
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let baseAmount = answer.amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.magentaBright(`The currency you want to convert in ${answer.to} is ${convertedAmount}`));
