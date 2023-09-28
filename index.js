const inquirer = require("inquirer");
//const db= require ('./db/connection')
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
} = require("./db/index");
inquirer
  .prompt([
    {
      type: "checkbox",
      name: "userAction",
      default: 7,
      message: "What would you like to do?",
      choices: [
        { name: "View all departments" },
        { name: "View all roles" },
        { name: "View all employees" },
        { name: "Add a department" },
        { name: "Add a role" },
        { name: "Add an employee" },
        //{ name: "Update an employee role" },
        { name: "Exit" },
      ],
    },
  ])
  .then((data) => {
    if (JSON.stringify(data) == "View all departments") {
      viewDepartments;
    } else if (JSON.stringify(data) == "View all roles") {
      viewRoles;
    } else if (JSON.stringify(data) == "View all employees") {
      viewEmployees;
    } else if (JSON.stringify(data) == "Add a department") {
      inquirer
        .prompt({
          type: "input",
          name: "dept_name",
          message: "What is the new department's name?",
        })
        .then((data) => {
          addDepartment(data);
        });
    } else if (JSON.stringify(data) == "Add a role") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title for the new role?",
          },
          {
            type: "input",
            name: "salary",
            message:
              "What is the salary for the new role (numbers only, no commas)?",
          },
          {
            type: "input",
            name: "dept_id",
            message:
              "What is the department id for the new role (numbers only, no commas)?",
          },
        ])
        .then((data) => {
          addRole(data);
        });
    } else if (JSON.stringify(data) == "Add an employee") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?",
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?",
          },
          ,
          {
            type: "input",
            name: "role_id",
            message:
              "What is the role id for the new employee? (numbers only, no commas)?",
          },
          {
            type: "input",
            name: "manager_id",
            message:
              "What is the new employee's manager's id? (numbers only, no commas)?",
          },
        ])
        .then((data) => {
          addEmployee(data);
        });
    } else return;
  });

//GET ERROR MESSAGES
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   })

//TOMORROW (THURS 9/28): LOOK UP INQUIRER (SUBPROMPTS (SEPARATE FILE?), STORE USER INPUT AS VARIABLE, EXPORT AS OBJECT?)
