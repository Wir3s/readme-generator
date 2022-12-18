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
  return `# ${data.title}

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

## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
