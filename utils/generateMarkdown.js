// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return ''
    }
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

        case 'APACHE 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';

        case 'GPL V3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';

        case 'BSD 3-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';

        case 'None':
            return '';

        default:
            return '';

    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return ''
    }
    switch (license) {
        case 'MIT':
            return '(https://opensource.org/licenses/MIT)';

        case 'APACHE 2.0':
            return '(https://opensource.org/licenses/Apache-2.0)';

        case 'GPL V3':
            return '(https://www.gnu.org/licenses/gpl-3.0)';

        case 'BSD 3-Clause License':
            return '(https://opensource.org/licenses/BSD-3-Clause)';

        case 'None':
            return '';

        default:
            return '';

    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return ''
    } else {
        return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(res) {

    const data = JSON.parse(res);
    return `
# ${data.title}
${renderLicenseSection(data.license)}

## Description <br>
${data.description}

## Table of Contents
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[License](#${data.title.split(' ').join('-')})<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)<br>
    

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](${data.email}).
You can find more of my work at [${data.userName}](https://github.com/${data.userName})


`;
}

module.exports = { generateMarkdown };
