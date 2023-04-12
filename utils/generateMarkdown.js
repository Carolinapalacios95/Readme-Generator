// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return "";
  } else if ( license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](${renderLicenseLink(license)})`;
  } else if ( license == "APACHE2.0") {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
  } else if ( license == "Boost1.0" ) {
    return `[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license)})`;
  } else if ( license == "MPL2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
  } else if ( license == "BSD2") {
    return `[![License: BSD2](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](${renderLicenseLink(license)})`;
  } else if ( license == "BSD3") {
    return `[![License: BSD3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${renderLicenseLink(license)})`;
  } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // select correct license link for the selected license
  if ( license == "none") {
    return "";
  } else if ( license == "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if ( license == "APACHE2.0") {
    return "https://opensource.org/licenses/Apache-2.0)";
  } else if ( license == "Boost1.0" ) {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if ( license == "MPL2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if ( license == "BSD2") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if ( license == "BSD3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } 
};
   
     

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license == "none") {
    return "";
        } else {
    return `## License
        
    ${license}`
        }
    }
 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
    
${data.description}
    
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)${data.license == 'None' ? '' : "\n* [License](#License)"}
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

If there are additional questions, please reach out to me here: 

* GitHub: https://github.com/${data.username}
* Email: ${data.email}
`;
};

module.exports = generateMarkdown;
