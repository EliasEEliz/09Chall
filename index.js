// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "Enter project title",
},
{
    type: "input",
    name: "description",
    message: "Enter a description, installation instructions, usage information, contribution guidelines, and test instructions",
},
{
    type: "checkbox",
    name: "license",
    message: "Choose your license",
    choices: ["Apache License 2.0","GNU General Public License v3.0","MIT"],
},
{
    type: "input",
    name: "author",
    message: "Enter your GitHub username",
},
{
    type: "input",
    name: "email",
    message: "Enter your email address",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating ReadME File...");
        writeToFile("./utils/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();