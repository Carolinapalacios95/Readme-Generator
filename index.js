// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        name: "installation",
        message: "Describe any required packages needed for the installation of this application. (Required)",
        validate: installationInput => {
          if (installationInput) {
              return true;
          } else {
              console.log('Please enter installation information!');
              return false;
          }
      },
      },
      {
        type: "list",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
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
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please enter your guidelines for contributing. (Required)',
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
        name: "tests",
        message: "Provide walkthrough of required tests if applicable or N/A. (Required)",
        validate: testsInput => {
          if (testsInput) {
              return true;
          } else {
              console.log('Please enter walkthrough of required tests or N/A!');
              return false;
          }
        }  
      },
      {
        type: "input",
        name: "username",
        message: "Write your GitHub username.",
        validate:  githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log('Please enter your Github username. (Required)' );
              return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address. (Required)",
        validate:  emailInput => {
          if (emailInput) {
              return true;
          } else {
              console.log('Please enter your email address!');
              return false;
          }
        }
      }
];

// TODO: Create a function to write README file
function writeToFile(data) {
  
  fs.writeFile("newReadME.md", data, function (err) {
    err ? console.log(err) : console.log('Saved newReadME.md!')
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then ((data) => {
    const markdown = generateMarkdown(data);
    writeToFile(markdown);
    })
}

// Function call to initialize app
init();
