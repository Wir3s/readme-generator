// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("hi", license);
  let licenseBadge = "";
  let trimLic = String(license);
  console.log(trimLic);
  switch (trimLic) {
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return licenseBadge;
    case "Mozilla":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      return licenseBadge;
    case "Apache":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return licenseBadge;
    case "GPLv2":
      licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      return licenseBadge
      default:
      licenseBadge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `${renderLicenseBadge(data.license)}
  # ${data.title}

## Description
  ${data.description}

## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  [Contribution](#contribution)  
  [License](#license)  
  [Tests](#tests)  
  [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contributing
  ${data.contribution}

## Tests

## Questions
  ${data.userName}  
  [GitHub Profile](https://github.com/${data.userName})  
  Email me at ${data.email} with any additional questions.

## License
  ${data.license}
  
`;
}

module.exports = generateMarkdown;
