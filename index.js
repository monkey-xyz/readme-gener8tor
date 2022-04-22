// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownft = require('./utils/generateMarkdown');

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
        choices: ['BSD','MIT','GPL','None'],
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

    fs.writeFile(fileName, markdownft.generateMarkdown(data), function(err){
        err ? console.error(err) : console.log('Your README has been generated.')})
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then (function (data) {
            writeToFile('README2.md', data)
        })
}

// Function call to initialize app
init();
