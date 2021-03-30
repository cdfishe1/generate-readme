// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {type: 'input',
        message: 'What is the title of the project?',
        name: 'title'},

        {type: 'input',
        message: 'Describe your project.',
        name: 'description'
        },

        {type: 'input',
        message: 'How do you install your project?',
        name: 'install'
        },

        {type: 'input',
        message: 'What tests run with your project?',
        name: 'tests'
        },

        {type: 'input',
        message: 'Who are the contributors to your project?',
        name: 'contributors'
        },

        {type: 'input',
        message: 'How should users contact you for questions?',
        name: 'contact'
        },


    ]);
};


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
