#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let small=0;
let capital=0;
let special=0;
let digit=0;
let word=await inquirer.prompt([{
    name:"cnt",
    type:"input",
    message:"enter string ",
}]);

for(let i=0;i<word.cnt.length;i++)
{
    if(word.cnt[i]!=" ")
    {
        if(word.cnt[i]>='a' && word.cnt[i]<='z')
        {
            small++;
        }
        else if(word.cnt[i]>='A' && word.cnt[i]<='Z')
        {
            capital++;
        }
        else if(word.cnt[i]>='0' && word.cnt[i]<='9')
        {
            digit++;
        }
        else{
            special++;
        }
    }
}
console.log(`the total length of small alphabets in text is: ${chalk.red(small)} \n
the total length of capital alphabets in text is: ${chalk.red(capital)} \n
the total length of special characters in text is: ${chalk.red(special)}\n
the total length of numeric values in text is: ${chalk.red(digit)}`);