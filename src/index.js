// DONE: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./util/generateMarkdown')
const { writeFileSync } = require('fs')
// DONE: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'title',
	},
	{
		type: 'input',
		name: 'description',
		message: 'description',
	},
	{
		type: 'input',
		name: 'installation',
		default: 'npm install',
		message: 'installation instructions',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'usage info',
	},
	{
		type: 'input',
		name: 'contribution',
		message: 'contribution guidelines',
	},
	{
		type: 'input',
		name: 'testing',
		message: 'testing instructions',
		default: 'npm test',
	},
	{
		type: 'list',
		name: 'license',
		messsage: 'choose license',
		choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
	},
	{
		type: 'input',
		name: 'authorUsername',
		message: 'github username',
	},
	{
		type: 'input',
		name: 'authorEmail',
		message: 'contact email',
	},
]

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
	const path = process.cwd()
	writeFileSync(`${path}/${fileName}`, data)
}

// DONE: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			writeToFile('README.md', generateMarkdown(answers))
			console.log(`Readme.md generated successfully in ${process.cwd()}`)
		})
		.catch((error) => {
			console.log(`error occured ${error}`)
		})
}
// Function call to initialize app
init()
