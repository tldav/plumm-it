DROP DATABASE IF EXISTS plumm_db;
CREATE DATABASE plumm_db;

USE plumm_db;

CREATE TABLE temp
(
    user_id INT NOT NULL
    AUTO_INCREMENT,
username VARCHAR
    (20) NULL,
email VARCHAR
    (100) NULL,
PRIMARY KEY
    (user_id)
);