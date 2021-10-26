DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
USE business_db;

CREATE TABLE employees(
    
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    
    first_name VARCHAR(30) NOT NULL,
    
    last_name VARCHAR(30) NOT NULL,
    
    title BOOLEAN NOT NULL,
    
    department BOOLEAN NOT NULL,
    
    salary INTEGER(6),
    
    manager BOOLEAN NOT NULL,

    PRIMARY KEY (id)
);