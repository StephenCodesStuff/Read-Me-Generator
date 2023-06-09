
function renderLicenseBadge(license) {
  if (license =="none"){
    return ''
  }

  badge = `![Github Badge](https://img.shields.io/badge/license-${license}-green)`

  console.log(badge);
  console.log(license);
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license){
//     return ''
//   }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license){
//     return ''
//   }

//   return (renderLicenseLink(license))
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown (response) {
  
  return  ` ${renderLicenseBadge(response.license)}

  
  # ${response.title}
 
 
  ## Description
  
 ${response.discription}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  ${response.installation}
  
  
  ## Usage
  ${response.usage}
  
  
  
  ## License

  ${response.license}

  
  
    
  ## Contributing
  ${response.contribution}
  
  
  ## Tests
  
  To run tests, run the following command:
  ${response.test}
  
  
  ## Questions
  
  Email: [Email](mailto:${response.email})
  github: [Github](https://github.com/${response.username})`
 
  
 };

module.exports = generateMarkdown;
