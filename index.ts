import inquirer from "inquirer"

let currency:any = {
    "AED" : 3.67,       
    "BDT" : 117.53,
    "CNY" : 7.25,
    "EUR" : 0.92,
    "INR" : 83.21,
    "IQD" : 1312.07,
    "IRR" : 42062.50,
    "PHP" : 58.02,
    "PKR" : 278.80,
    "SAR" : 3.75, 
    "TRY" : 32.24,
    "USD" : 1,
} 
let answer = await inquirer.prompt([{
    message: "Chosse the currency you want to convert",
    name: "from",
    type: "list",
    choices: ["AED", "BDT", "CNY", "EUR", "INR", "IQD", "IRR", "PHP", "PKR", "SAR", "TRY", "USD"]
},
{
    message: "Chosse the currency you want to convert in",
    name: "to",
    type: "list",
    choices: ["AED", "BDT", "CNY", "EUR", "INR", "IQD", "IRR", "PHP", "PKR", "SAR", "TRY", "USD"]
},
{
    message: "Please enter the Amount: ",
    name: "amount",
    type: "number"
}])
