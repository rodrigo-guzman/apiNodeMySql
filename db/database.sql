CREATE DATABASE IF NOT EXISTS apiExpressMySql;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee (name, salary) values
('Rodrigo Guzmán', 100000),
('Gastón Fernandez', 1000000)