const inquirer = require ('inquirer');
const db= require ('./db/connection')

inquirer
.prompt([
    {
        type: 'checkbox',
        name: 'userAction',
        message: 'What would you like to do?',
        choices: [
            {name: 'View all departments'},
            {name: 'View all roles'},
            {name: 'View all employees'},
            {name: 'Add a department'},
            {name: 'Add a role'},
            {name: 'Add an employee'},
            {name: 'Update an employee role'},
        ]
    }
])
.then ((data) => {
    console.log (JSON.stringify(data))
})