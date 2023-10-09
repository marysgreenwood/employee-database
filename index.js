const inquirer = require("inquirer");
const db = require("./db/connection");

const { viewDepartments, viewRoles, viewEmployees } = require("./db/index");

//ADD A DEPARTMENT PROMPT
function newDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDept",
        message: "Enter the name of the new department",
      },
    ])
    .then(function (data) {
      console.log(`${data.newDept} has been added to the database`);
      rootQuestion();
    });
}

//ADD A ROLE PROMPT
function newRole() {
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
      console.log(`${data.title} has been added to the database`);
      rootQuestion();
    });
}

//ADD AN EMPLOYEE PROMPT
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
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
      console.log(`${data.firstName} has been added to the database`);
      rootQuestion();
    });
}

//PROMPT TO UPDATE AN EMPLOYEE'S ROLE
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeID",
        message: "What is the employee's id number? (numerals only)",
      },
      {
        type: "input",
        name: "newRole",
        message:
          "What is id number of the employee's new role? (numerals only)",
      },
    ])
    .then((data) => {
      console.log(
        `Employee no. ${data.employeeID} has been reassigned (role no. ${data.newRole})`
      );
      rootQuestion();
    });
}

//INITIAL ACTION MENU
function rootQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userAction",
        //default: 7,
        message: "What would you like to do?",
        choices: [
          { name: "View all departments" },
          { name: "View all roles" },
          { name: "View all employees" },
          { name: "Add a department" },
          { name: "Add a role" },
          { name: "Add an employee" },
          { name: "Update an employee role" },
          { name: "Exit" },
        ],
      },
    ])
    .then(function (data) {
      switch (data.userAction) {
        case "View all departments":
          //console.log("You have chosen to view all departments");
          viewDepartments();
          setTimeout(rootQuestion, 3000);
          break;
        case "View all roles":
          viewRoles();
          setTimeout(rootQuestion, 3000);
          break;
        case "View all employees":
          viewEmployees();
          setTimeout(rootQuestion, 3000);
          break;
        case "Add a department":
          newDepartment();
          break;
        case "Add a role":
          newRole();
          break;
        case "Add an employee":
          newEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Exit":
          console.log("Goodbye!");
          break;
      }
    });
}
rootQuestion();

//GET ERROR MESSAGES
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   })
