// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

console.log(markdown)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Start small, what is your project name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your description?',
        name: 'summary',
    },
    {
        type: 'input',
        message: 'How is this project installed?',
        name: 'installguide',
    },
    {
        type: 'input',
        message: 'How is this project used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['BSD 2-Clause','BSD 3-Clause','MIT','GPL','Creative Commons','None'],
    },
    {
        type: 'input',
        message: 'How can people contribute?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What tests can be run?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeGen = markdown(data);

    fs.writeFile(fileName, readMeGen, function(err){
        err ? console.error(err) : console.log('Your README has been generated.')})
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then (function (data) {
            writeToFile('READMETEMPLATE.md', data)
        })
}

// Function call to initialize app
init();