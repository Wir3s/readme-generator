// Function that returns a license badge based on which license is passed in
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
      break;
    case "Mozilla":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv2":
      licenseBadge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    default:
      licenseBadge = "";
  }
  return licenseBadge;
}

//  Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}

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
  ${data.tests}

## Questions
  ${data.userName}  
  [GitHub Profile](https://github.com/${data.userName})  
  Email me at ${data.email} with any additional questions.

## License
  This project is using the ${data.license} license.
  
`;
}

module.exports = generateMarkdown;
