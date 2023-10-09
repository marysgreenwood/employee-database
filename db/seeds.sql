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

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ("Arya", "Stark", 1002, 5),
  ("Bran", "Stark", NULL, 1),
  ("Eddard", "Stark", 1001, 4),
  ("Robb", "Stark", NULL, 6),
  ("Theon", "Greyjoy", 1003, 7),
  ("Catelyn", "Stark", 1001, 2),
  ("Sansa", "Stark", 1005, 3),
  ("Jon", "Snow", 1001, 8),
  ("Tyrion", "Lannister", 1007, 9);
