// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Creative Commons":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  } else {
    return `## License
${license} - See license in repository`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.inputTitle}  ${renderLicenseBadge(data.inputLicense)}

  ## Description
  ${data.inputDescription}

  ## Link
  https://github.com/KrystianKowalak/${data.inputLinkRepoName}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.inputLicense)}
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.inputInstallation}

  ## Usage
  ${data.inputUsage}

  ## Tests
  ${data.inputTesting}

  ## How to Contribute
  ${data.inputContributions}

  ## Credits
  ${data.inputCredits}

  ${renderLicenseSection(data.inputLicense)}
  ${data.inputLicense} 

  ## Questions
  For any furthur question please reach out to me at,
  Github: https:/github.com/${data.inputGitUsername}
  Email: ${data.inputEmail}`;
}

module.exports = generateMarkdown;