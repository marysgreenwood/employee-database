const inquirer = require ('inquirer');
//const db= require ('./db/connection')
const viewDepartments= require('./db/index');
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
    if ((JSON.stringify(data))=='View all departments'){
        viewDepartments
    } else {
    console.log (JSON.stringify(data))
    };
})