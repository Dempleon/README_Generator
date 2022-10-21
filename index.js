// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the application?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'What is the application description?',
        name: 'desccription'
    }, 
    {
        type: 'input',
        message: 'How do users install the application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do users use the application',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How do other developers contribute to the application?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How will the application be tested?',
        name: 'testing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
