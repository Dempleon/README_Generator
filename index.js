// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is the title of the application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description of the application',
        name: 'description'
    },
    {
        type: 'list',
        message: 'Choose the license the project is under',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL V3', 'BSD 3-Clause License', 'None']
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
        message: 'How can other developers contribute to the project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What commands should be run to run tests?',
        name: 'testing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log(`File ${fileName} was succesfully written`)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('GENERATED_README.md', gen.generateMarkdown(JSON.stringify(response)));
    })
}

// Function call to initialize app
init();
