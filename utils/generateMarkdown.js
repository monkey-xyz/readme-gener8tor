// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD') {
    
  } else if (license === 'MIT') {

  } else if (license === 'GPL') {

  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    
  } else if (license === 'MIT') {

  } else if (license === 'GPL') {

  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `
  ## License`
  if (license === 'None') {
    return ' ';
  } else {
    licenseSection;
    renderLicenseBadge();
    renderLicenseLink();
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.summary}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
  ${data.installguide}
  
  ## Usage
  
  ${data.usage}
  ${renderLicenseSection()}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  * [GitHub](${data.github})
  * [Email](${data.email})
`;
}

module.exports = generateMarkdown;
