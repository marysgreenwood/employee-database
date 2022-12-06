INSERT INTO departments (dept_name)
VALUES ("Administration"),
  ("Resarch and Development"),
  ("Marketing"),
  ("Human Resources"),
  ("Accounting");

INSERT INTO roles (title, salary, department_id)
VALUES ("Operations Director", 200000.00, 100),
  ("Research Analyst", 900000.00, 101),
  ("Software Developer", 100000.00, 101),
  ("Marketing Director", 100000.00, 102),
  ("Marketing Consultant", 80000.00, 102),
  ("Recruiting Manager", 80000.00, 103),
  ("Benefits Counselor", 80000.00, 103),
  ("Financial Director", 100000.00, 104),
  ("Accounting", 70000.00, 104);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Arya", "Stark", 5, 1002),
  ("Bran", "Stark", 1, NULL),
  ("Eddard", "Stark", 4, 1001),
  ("Robb", "Stark", 6, NULL),
  ("Theon", "Greyjoy", 7, 1003),
  ("Catelyn", "Stark", 2, 1001),
  ("Sansa", "Stark", 3, 1005),
  ("Jon", "Snow", 8, 1001),
  ("Tyrion", "Lannister", 9, 1007);
