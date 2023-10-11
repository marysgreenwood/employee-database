//FUTURE DEVELOPMENT:
//  show manager last name when viewing employees
//  update role by title rather than id

const db = require("./connection");

//view all departments
function viewDepartments() {
  db.query(`SELECT * FROM departments`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
}

//view all roles
function viewRoles() {
  db.query(
    `SELECT  roles.title, roles.id, departments.dept_name, roles.salary FROM roles 
  JOIN departments ON roles.department_id = departments.id;`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    }
  );
}
//view all employees
function viewEmployees() {
  db.query(
    `SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.title FROM employees JOIN roles ON employees.role_id=roles.id`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    }
  );
}

//add a department

function addDepartment(deptName) {
  db.query(
    `INSERT INTO departments (dept_name)
  VALUES (?)`,
    deptName,
    //INSERT USER INPUT (DATA) AS VARIABLE ABOVE
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`${deptName} has been added to the database`);
    }
  );
}

//add a role
function addRole(newTitle, newSalary, newDeptId) {
  db.query(
    `INSERT INTO roles (title, salary, department_id)
  VALUES (?, ?, ?)`,
    [newTitle, newSalary, newDeptId],
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`${newTitle} has been added to the database`);
    }
  );
}

//add an employee
function addEmployee(firstName, lastName, roleId, managerId) {
  db.query(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id )
	VALUES (?, ?, ?, ?)`,
    [firstName, lastName, roleId, managerId],
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`${firstName} ${lastName} has been added to the database`);
    }
  );
}
//update an employee
function updateEmployee(roleId, employeeId) {
  db.query(
    `UPDATE employees
	SET role_id= ?
  WHERE id= ?`,
    [roleId, employeeId],
    //INSERT USER INPUT AS ARRAY OF VARIABLES ABOVE, FIGURE OUT FOREIGN KEY QUESTION
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log(
        `Employee with ID ${employeeId} successfully updated to new role`
      );
    }
  );
}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
};
