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

This app requires the installation of inquirer from NPM, as well as the fs and util modules.


## Tests

Generates 0 errors on load or through execution.

## Contributing

### ${data.contributers}

## License
### ${data.license}

## Questions
### Contact cdfishe1@gmail.com
  `
}

module.exports = generateMarkdown;
