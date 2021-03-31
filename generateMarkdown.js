// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  
  return `
  # ${data.title}

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation

${data.install}

## Tests

${data.tests}

## Usage

${data.usage}

## Contributing

${data.contributors}

## License
### ${data.license}

## Questions
* [${data.github}](https://github.com/${data.github})
* [${data.email}](mailto:${data.email})
  `
}

module.exports = generateMarkdown;
