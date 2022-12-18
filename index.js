// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter Project Description",
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
  // {
  //   type: "input",
  //   name: "tests",
  //   message: "Enter test instructions",
  // },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license:",
    choices: ['MIT', 'Mozilla'],
  },
  // {
  //   type: "input",
  //   name: "userName",
  //   message: "Enter your GitHub username",
  // },
  // {
  //   type: "input",
  //   name: "email",
  //   message: "Enter your email address",
  // },
];

inquirer.prompt(questions).then((data) => writeToFile(data));

// TODO: Create a function to write README file
function writeToFile(data) {
  console.log(data);
  fs.writeFile("./utils/README.MD", generate(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
