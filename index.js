// TODO: Include packages needed for this application
const generateMarkdown = require('generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = fs.writeFile;

// TODO: Create an array of questions for user input
const questions = [
{type: 'input',
message: 'What is the title of the project?',
name: 'title',}];

const promptUser = () => {
    return inquirer.prompt([questions])
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
