import inquirer from "inquirer";
import chalk from "chalk";
let myTable = true;
console.log(chalk.bgGreen(`\t\nWELCOME\n\t`));
while (myTable) {
    let myInput = await inquirer.prompt({
        type: 'number',
        name: 'num',
        message: "Enter your Number"
    });
    let myNumber = myInput.num;
    if (myNumber) {
        console.log(`Here is the table of ${myNumber} \n `);
        for (let i = 1; i <= 10; i++)
            console.log(`${myNumber} x ${i} = ${myNumber * i}`);
    }
    else {
        console.log("Enter the input in numerical form");
    }
    // ask user that he want to print another table
    let againprint = await inquirer.prompt({
        type: 'confirm',
        name: 'askUser',
        message: "Do you want to print another Table?",
        default: false
    });
    if (againprint.askUser == false) {
        myTable = false;
        console.log(chalk.bgGray("Thank You!"));
    }
}
