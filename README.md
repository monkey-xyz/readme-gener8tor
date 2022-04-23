# README Generator 

## About the Project

For this assignment, the goal was to create a generator that would create a professional README.md file from the information the user input into the command lines.

## Features

This generator is accessible only through a provided terminal by executing the index.js by the command **node index.js**. This is supported through the built-in terminal on the user's respective coding program (i.e. Visual Studio Code's PowerShell), or one provided externally (Git Bash, Terminal).

Upon executing the command the user will be provided with an assortment of which will cover the contents of the README descending from top to bottom. These questions include what the project's name is, a link to the deployed application (if applicable), and general important information.

The license section itself is a separate series of functions, they directly pull from the data through the license input and create two separate pieces of information-- the link and badge. If the user has no license, the section is not included and will be blank.

## Tools
* Node.js
* Inquirer.js
* npm

## Documentation

[Video Demonstration](https://youtu.be/0EDR4T6fHgg)