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
  let licenseLink = '';
  
  switch(data.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'Apache': licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    break;

    case 'GPL': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'BSD3': licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;
    
    default: licenseLink = 'This app has no license.'
  }
  
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
### [${data.license}](${licenseLink})

## Questions
* [${data.github}](https://github.com/${data.github})
* [${data.email}](mailto:${data.email})
  `
}

module.exports = generateMarkdown;
