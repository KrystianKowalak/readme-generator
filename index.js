// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Provide a title for your read me file: ",
        name: "inputTitle"
    },
    {
        type: "input",
        message: "Provide a description for your read me file: ",
        name: "inputDescription"
    },
    {
        type: "input",
        message: "Provide a name of the repository for your read me file: ",
        name: "inputLinkRepoName"
    },
    {
        type: "input",
        message: "Provide step by step instructions on program instilation for your read me file: ",
        name: "inputInstallation"
    },
    {
        type: "input",
        message: "Provide step by step instructions for program useage for your read me file: ",
        name: "inputUsage"
    },
    {
        type: "input",
        message: "Provide testing examples for your read me file: ",
        name: "inputTesting"
    },
    {
        type: "input",
        message: "Provide instructions for contributions for your read me file: ",
        name: "inputContributions"
    },
    {
        type: "input",
        message: "Provide the names of coders for your read me file: ",
        name: "inputCredits"
    },
    {
        type: "list",
        message: "Which license do you want to use for your read me file: ",
        name: "inputLicense",
        choices: ["Apache", "GNU", "MIT", "Creative Commons","None"]
    },
    {
        type: "input",
        message: "What is your github username: ",
        name: "inputGitUsername"
    },
    {
        type: "input",
        message: "What is your email: ",
        name: "inputEmail"
    }
];

// TODO: Create a function to write README file
const responseHandler = (fileName, data) => {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("Success!"))
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then(function (answers) {
            responseHandler("README.md", generateMarkdown(answers));
        }
    )
}

// Function call to initialize app
init();