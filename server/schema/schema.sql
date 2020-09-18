DROP DATABASE IF EXISTS plumm_db;
CREATE DATABASE plumm_db;

USE plumm_db;

CREATE TABLE users(
	user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(320) NOT NULL UNIQUE,
    username VARCHAR(30) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL,
    user_password VARCHAR(250) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE threads(
	thread_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    title VARCHAR(200) NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    PRIMARY KEY(thread_id)
);

CREATE TABLE comments(
	comment_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    thread_id INT UNSIGNED NOT NULL,
    parent_comment_id INT UNSIGNED NOT NULL,
    active NUMBER(1),
    body TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(thread_id) REFERENCES threads(thread_id),
    FOREIGN KEY(parent_comment_id) REFERENCES comments(comment_id),
    PRIMARY KEY (comment_id)
);