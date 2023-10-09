DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
ALTER TABLE departments AUTO_INCREMENT=100;

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title  VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
     manager_id INT,
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles (id)
   
);
ALTER TABLE employees AUTO_INCREMENT=1000;

