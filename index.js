
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Give me a brief discription of the project',
        name: 'discription',
      },
    {
        type: 'input',
        message: 'What are the installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contributions?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    // {
    //     type: 'list',
    //     message: 'What License are you using?',
    //     choices: ['Apache%20%License%20%2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'none'],
    //     name: 'license',
    // },
    {
        type: 'list',
        message: 'What License are you using?',
        choices: ['Apache', 'GNU', 'MIT', 'Boost', 'Eclipse', 'Mozilla', 'none'],
        name: 'license',
    },

    {
        type: 'input',
        message: 'What is your email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github username',
        name: 'username',
    },
  ])
  .then((response) =>
    fs.writeFile("readme.md",generateMarkdown (response),(err)=>{
        err ? console.log(err) : console.log("File Made")
    })
  );
