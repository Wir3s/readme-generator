// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license:",
    choices: ['MIT', 'Mozilla', 'Apache', 'GPLv2'],
  },
  {
    type: "input",
    name: "userName",
    message: "Enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

inquirer.prompt(questions).then((data) => writeToFile(data));

// Function to write README file
function writeToFile(data) {
  console.log(data);
  fs.writeFile("./utils/README.MD", generate(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}