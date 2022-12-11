const inquirer = require ('inquirer');
//const db= require ('./db/connection')
const viewDepartments= require('./db/index');
inquirer
.prompt([
    {
        type: 'checkbox',
        name: 'userAction',
        default: 7,
        message: 'What would you like to do?',
        choices: [
            {name: 'View all departments'},
            {name: 'View all roles'},
            {name: 'View all employees'},
            {name: 'Add a department'},
            {name: 'Add a role'},
            {name: 'Add an employee'},
            {name: 'Update an employee role'},
            {name: 'Exit'}
        ]
    }
])
.then ((data) => {
    if ((JSON.stringify(data))=='View all departments'){
        viewDepartments
    } else if ((JSON.stringify(data))=='View all roles'){
        viewDepartments.viewRoles
    } else return;
});