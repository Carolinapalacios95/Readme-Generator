// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a name/title for your Project/Application. (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('A title/name is required!');
                return false;
            }
        }
      },
      {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project. (Required)",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description of your application');
                return false;
            }
        }
      },
      {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to the image you want to use as the screenshot."
      },
      {
        type: "input",
        name: "installation",
        message: "Describe any required packages needed for the installation of this application."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
        default: 0,
        when: ({ contents }) => {
            if (contents.indexOf('License') > -1) {
                return true;
            } else {
                return false;
            }
        }
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use. (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        },
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please provide license information!');
                    return false;
                }
            }
        },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your guidelines for contributing.',
        when: ({ contents }) => {
            if (contents.indexOf('Contributing') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter guidelines for contributing!');
                return false;
            }
        }
      },
      {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
      },
      {
        type: "input",
        name: "features",
        message: "List some cool features about this project here.",
      },
      {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
