// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
	const licenses = [
		{
			license: 'MIT',
			badge: 'https://img.shields.io/github/license/Naereen/StrapDown.js.svg',
		},
		{
			license: 'APACHE 2.0',
			badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
		},
		{
			license: 'GPL 3.0',
			badge: 'https://img.shields.io/github/license/Naereen/StrapDown.js.svg',
		},
		{
			license: 'BSD 3',
			badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
		},
		{
			license: 'None',
			badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
		},
	]
	if (license) {
		if (license) {
			var badge
			licenses.map((v, _) => {
				license == v.license ? (badge = `![License](${v.badge})`) : null
			})
			return badge
		} else {
			return ``
		}
	} else {
		return ``
	}
}

// DONE: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	return license ? `https://opensource.org/licenses/${license}` : ''
}
// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return license
		? `
### License
This application is under [${license}](${renderLicenseLink(license)}).
    	`
		: ``
}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
	var {
		title,
		description,
		installation,
		usage,
		contribution,
		testing,
		license,
		authorUsername,
		authorEmail,
	} = data
	return `
# ${title} ${renderLicenseBadge(license)}

${description}

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation:

In order to install the necessary dependencies mentioned in package.json, use:

\t${installation}

### Usage:

${usage}

${renderLicenseSection(license)}

### Contributing:

${contribution}

### Tests:

to perform tests -

\t${testing}

### Questions:

For any inquiries please feel free to contact on ${authorEmail}

![picture](https://github.com/${authorUsername}.png?size=80)[Github]("https://github.com/${authorUsername}")

`
}

module.exports = generateMarkdown
