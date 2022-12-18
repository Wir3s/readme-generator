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
      console.log(licenseBadge);
      return licenseBadge;
    default:
      licenseBadge = "";
  }
  // if (trimLic === "MIT") {
  //   licenseBadge =
  //     "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  //   console.log(licenseBadge);
  //   return licenseBadge;
  // } else {
  //   return licenseBadge;
  // }
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

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contribution
  ${data.contribution}



## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
