DROP DATABASE IF EXISTS plumm_db;
CREATE DATABASE plumm_db;

USE plumm_db;

CREATE TABLE users
(
    user_id INT
    UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR
    (320) NOT NULL UNIQUE,
    username VARCHAR
    (30) NOT NULL UNIQUE,
    first_name VARCHAR
    (50) NOT NULL, 
    last_name VARCHAR
    (50) NOT NULL,
    user_password VARCHAR
    (250) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY
    (user_id)
);

    CREATE TABLE threads
    (
        thread_id INT
        UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    title VARCHAR
        (200) NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    is_edited BOOLEAN DEFAULT FALSE,
    FOREIGN KEY
        (user_id) REFERENCES users
        (user_id),
    PRIMARY KEY
        (thread_id)
);

        CREATE TABLE comments
        (
            comment_id INT
            UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    thread_id INT UNSIGNED NOT NULL,
    parent_comment_id INT UNSIGNED,
    is_active BOOLEAN DEFAULT TRUE,
    body TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    is_edited BOOLEAN DEFAULT FALSE,
    FOREIGN KEY
            (user_id) REFERENCES users
            (user_id),
    FOREIGN KEY
            (thread_id) REFERENCES threads
            (thread_id),
    FOREIGN KEY
            (parent_comment_id) REFERENCES comments
            (comment_id),
    PRIMARY KEY
            (comment_id)
);

DELIMITER //

CREATE PROCEDURE getAllThreads()

BEGIN

    SELECT t.thread_id, t.title, t.body, t.created_at, t.upvotes, t.downvotes, u.username, t.is_edited
    FROM threads t
        JOIN users u
        ON t.user_id = u.user_id
    WHERE t.is_active = TRUE
    ORDER BY t.created_at DESC;

END
//



DELIMITER //

CREATE PROCEDURE getThreadComments(param INT)

BEGIN

    SELECT c.comment_id, c.parent_comment_id, c.body, c.created_at, c.upvotes, c.downvotes, u.username, c.is_edited
    FROM comments c
        JOIN threads t ON t.thread_id = c.thread_id
        JOIN users u ON c.user_id = u.user_id
    WHERE t.thread_id = param AND c.is_active = TRUE
    ORDER BY c.parent_comment_id, c.created_at;

END
//



DELIMITER //

CREATE PROCEDURE getOneThread(param INT)

BEGIN

    SELECT t.thread_id, t.title, t.body, t.created_at, t.upvotes, t.downvotes, u.username, t.is_edited
    FROM threads t
        JOIN users u
        ON t.user_id = u.user_id
    WHERE t.thread_id = param AND t.is_active = TRUE;

END
//



DELIMITER //

CREATE PROCEDURE createUser(param_email VARCHAR
(320), param_username VARCHAR
(30), param_first_name VARCHAR
(50), param_last_name VARCHAR
(50), param_password VARCHAR
(250))

BEGIN

    INSERT INTO users
        (email, username, first_name, last_name, user_password)
    VALUES
        (param_email, param_username, param_first_name, param_last_name, param_password);


END
//




DELIMITER //

CREATE PROCEDURE createThread(param_title VARCHAR
(200), param_body TEXT, param_user_id INT)

BEGIN

    INSERT INTO threads
        (title, body, user_id)
    VALUES
        (param_title, param_body, param_user_id);


END
//




DELIMITER //

CREATE PROCEDURE createComment(param_body TEXT, param_user_id INT, param_thread_id INT, param_parent_comment_id INT)

BEGIN

    INSERT INTO comments
        (body, user_id, thread_id, parent_comment_id)
    VALUES
        (param_body, param_user_id, param_thread_id, param_parent_comment_id);


END
//




DELIMITER //

CREATE PROCEDURE updateUser(param_user_id INT, 
param_email VARCHAR
(320), param_username VARCHAR
(30), param_first_name VARCHAR
(50), param_last_name VARCHAR
(50), param_password VARCHAR
(250))

BEGIN

    UPDATE users SET email = param_email, username = param_username, first_name = param_first_name, last_name = param_last_name, user_password = param_password
    WHERE user_id = param_user_id
    LIMIT 1;


END
//




DELIMITER //

CREATE PROCEDURE updateThread(param_thread_id INT, 
param_title VARCHAR
(200), param_body TEXT)

BEGIN

    UPDATE threads SET title = param_title, body = param_body, is_edited = TRUE
    WHERE thread_id = param_thread_id
    LIMIT 1;


END
//




DELIMITER //

CREATE PROCEDURE updateComment(param_comment_id INT, param_body TEXT)

BEGIN

    UPDATE comments SET body = param_body, is_edited = TRUE
    WHERE comment_id = param_comment_id
    LIMIT 1;


END
//




DELIMITER //

CREATE PROCEDURE upvoteThread(param_thread_id INT)

BEGIN

	UPDATE threads SET upvotes = upvotes + 1
    WHERE thread_id = param_thread_id
    LIMIT 1;


END
//




DELIMITER //

CREATE PROCEDURE downvoteThread(param_thread_id INT)

BEGIN

	UPDATE threads SET downvotes = downvotes + 1
    WHERE thread_id = param_thread_id
    LIMIT 1;


END
//




DELIMITER //

CREATE PROCEDURE upvoteComment(param_comment_id INT)

BEGIN

	UPDATE comments SET upvotes = upvotes + 1
    WHERE comment_id = param_comment_id
    LIMIT 1;


END
//




DELIMITER //

CREATE PROCEDURE downvoteComment(param_comment_id INT)

BEGIN

	UPDATE comments SET downvotes = downvotes + 1
    WHERE comment_id = param_comment_id
    LIMIT 1;


END
//