// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === "APACHE2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === "Boost1.0" ) {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
  } else if (license === "MPL2.0") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  } else if (license === "BSD2") {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]'
  } else if (license === "BSD3") {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost1.0" :
        licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
        break;
    case "MPL2":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "BSD2":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "BSD3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
