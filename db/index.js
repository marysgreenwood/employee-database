const db= require ('./connection');
const table= require ('console.table')

/*db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });*/
  //view all departments
  viewDepartments= db.query(`SELECT * FROM departments`, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.table(result);
  });
  //view all roles
  viewRoles= db.query(`SELECT  roles.title, roles.id, departments.dept_name, roles.salary FROM roles 
  JOIN departments ON roles.department_id = departments.id;`, (err, result)=> {
    if (err){
      console.log(err);
    }
    console.table(result);
  })
  //view all employees
  viewEmployees = db.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.dept_name`)
  //add a department
  //add a role
  //update an employee

  module.exports={
    viewDepartments,
    viewRoles,
  }