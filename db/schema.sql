CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
  id INT
  AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR
  (225) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  PRIMARY KEY
  (id)
);
