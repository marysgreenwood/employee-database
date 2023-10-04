const db = require("./connection");
//const table = require("console.table");
//import { data } from '@inquirer/prompts'

//view all departments
viewDepartments = db.query(`SELECT * FROM departments`, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.table(result);
});
//view all roles
viewRoles= db.query(
  `SELECT  roles.title, roles.id, departments.dept_name, roles.salary FROM roles 
  JOIN departments ON roles.department_id = departments.id;`,
  (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  }
);
//view all employees
viewEmployees = db.query(
  `SELECT employees.id, employees.first_name, employees.last_name FROM employees JOIN roles ON employees.role_id=roles.id JOIN departments ON roles.department_id = departments.id`,
  (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  }
);

//add a department
//const answer = await input({ message: 'Enter your name' }); (NEW VERSION)
// addDepartment (data) = db.query(
//   `INSERT INTO departments (dept_name)
//   VALUES (?)`, data
//   //INSERT USER INPUT (DATA) AS VARIABLE ABOVE
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(result);
//   }
// );

// //add a role
// addRole = db.query(
//   `INSERT INTO roles (title, salary, dept_id)
//   VALUES (?, ?, ?)`,
//   //INSERT USER INPUT AS ARRAY OF VARIABLES ABOVE, FIGURE OUT FOREIGN KEY QUESTION
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(result);
//   }
// );

// //add an employee
// addEmployee = db.query(
//   `INSERT INTO employees (first_name, last_name, role_id, manager_id )
// 	VALUES (?, ?, ?, ?)`,
//   //INSERT USER INPUT AS ARRAY OF VARIABLES ABOVE, FIGURE OUT FOREIGN KEY QUESTION
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(result);
//   }
// );
// //update an employee
// updateEmployee = db.query(
//   `UPDATE employees (role_id )
// 	SET (role_id= ?)
//   WHERE id= ?`,
//   //INSERT USER INPUT AS ARRAY OF VARIABLES ABOVE, FIGURE OUT FOREIGN KEY QUESTION
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(result);
//   }
// );

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
};
// addDepartment,
// addRole,
// addEmployee,
// updateEmployee,
