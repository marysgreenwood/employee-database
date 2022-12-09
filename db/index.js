const db= require ('./connection');

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
    console.log(result);
  });
  //view all roles
  //view all employees
  //add a department
  //add a role
  //update an employee

  module.exports=viewDepartments;