DROP DATABASE IF EXISTS plumm_db;
CREATE DATABASE plumm_db;

USE plumm_db;

CREATE TABLE users
(
    user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(250) UNIQUE,
    username VARCHAR(30) NOT NULL UNIQUE,
    first_name VARCHAR(50), 
    last_name VARCHAR(50),
    user_password VARCHAR(250) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(user_id)
);

CREATE TABLE categories
(
    category_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(30) NOT NULL UNIQUE,
    user_id INT UNSIGNED NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    PRIMARY KEY(category_id)
);

CREATE TABLE threads
(
    thread_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    title VARCHAR(200) NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_edited BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(category_id) REFERENCES categories(category_id),
    PRIMARY KEY(thread_id)
);

CREATE TABLE comments
(
    comment_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    thread_id INT UNSIGNED NOT NULL,
    parent_comment_id INT UNSIGNED,
    is_active BOOLEAN DEFAULT TRUE,
    body TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_edited BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(thread_id) REFERENCES threads(thread_id),
    FOREIGN KEY(parent_comment_id) REFERENCES comments(comment_id),
    PRIMARY KEY(comment_id)
);

CREATE TABLE thread_votes
(
    vote_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    thread_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    vote BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (thread_id) REFERENCES threads (thread_id),
    UNIQUE thread_index(user_id, thread_id),
    PRIMARY KEY(vote_id)

);

CREATE TABLE comment_votes
(
    vote_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    comment_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    vote BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (comment_id) REFERENCES comments (comment_id),
    UNIQUE comment_index(user_id, comment_id),
    PRIMARY KEY(vote_id)

);




DELIMITER //

CREATE PROCEDURE getAllThreads()

BEGIN

    SELECT t.thread_id, t.title, t.body, t.created_at, u.user_id, u.username, t.category_id, cat.category_name, t.is_edited, SUM(tv.vote = TRUE) AS upvotes, SUM(tv.vote = FALSE) AS downvotes, 
    (SELECT COUNT(*) FROM comments c WHERE c.thread_id = t.thread_id) AS comment_count
    FROM threads t
        JOIN users u ON t.user_id = u.user_id
        JOIN categories cat ON t.category_id = cat.category_id
        JOIN thread_votes tv ON t.thread_id = tv.thread_id 
    WHERE t.is_active = TRUE
    GROUP BY t.thread_id, t.title, t.body, t.created_at, u.user_id, u.username, t.category_id, cat.category_name, t.is_edited
    ORDER BY t.created_at DESC; 

END
//




DELIMITER //

CREATE PROCEDURE getCategoryThreads(param INT)

BEGIN

    SELECT t.thread_id, t.title, t.body, t.created_at, u.user_id, u.username, t.category_id, cat.category_name, t.is_edited, SUM(tv.vote = TRUE) AS upvotes, SUM(tv.vote = FALSE) AS downvotes, 
    (SELECT COUNT(*) FROM comments c WHERE c.thread_id = t.thread_id) AS comment_count
    FROM threads t
        JOIN users u ON t.user_id = u.user_id
        JOIN categories cat ON t.category_id = cat.category_id
		JOIN thread_votes tv ON t.thread_id = tv.thread_id 
    WHERE cat.category_id = param AND t.is_active = TRUE
    GROUP BY t.thread_id, t.title, t.body, t.created_at, u.user_id, u.username, t.category_id, cat.category_name, t.is_edited
    ORDER BY t.created_at DESC;

END
//




DELIMITER //

CREATE PROCEDURE getOneThread(param INT)

BEGIN

    SELECT t.thread_id, t.title, t.body, t.created_at, u.user_id, u.username, t.category_id, cat.category_name, t.is_edited, SUM(tv.vote = TRUE) AS upvotes, SUM(tv.vote = FALSE) AS downvotes, 
    (SELECT COUNT(*) FROM comments c WHERE c.thread_id = t.thread_id) AS comment_count
    FROM threads t
        JOIN users u ON t.user_id = u.user_id
        JOIN categories cat ON t.category_id = cat.category_id
		JOIN thread_votes tv ON t.thread_id = tv.thread_id 
    WHERE t.thread_id = param AND t.is_active = TRUE
    GROUP BY t.thread_id, t.title, t.body, t.created_at, u.user_id, u.username, t.category_id, cat.category_name, t.is_edited;

END
//




DELIMITER //

CREATE PROCEDURE getThreadComments(param INT)

BEGIN

    SELECT c.comment_id, c.parent_comment_id, c.body, c.created_at, u.user_id, u.username, c.is_edited, SUM(cv.vote = TRUE) AS upvotes, SUM(cv.vote = FALSE) AS downvotes
    FROM comments c
        JOIN threads t ON t.thread_id = c.thread_id
        JOIN users u ON c.user_id = u.user_id
        JOIN comment_votes cv ON c.comment_id = cv.comment_id 
    WHERE t.thread_id = param AND c.is_active = TRUE
    GROUP BY c.comment_id, c.parent_comment_id, c.body, c.created_at, u.user_id, u.username, c.is_edited
    ORDER BY c.parent_comment_id, c.created_at;

END
//




DELIMITER //

CREATE PROCEDURE createUser(param_email VARCHAR
(250), param_username VARCHAR
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
(200), param_body TEXT, param_user_id INT, param_category_id INT)

BEGIN

    INSERT INTO threads
        (title, body, user_id, category_id)
    VALUES
        (param_title, param_body, param_user_id, param_category_id);

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
(250), param_username VARCHAR
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

CREATE PROCEDURE upvoteThread(param_thread_id INT, param_user_id INT)

BEGIN

	INSERT INTO thread_votes(thread_id, user_id, vote)
    VALUES (param_thread_id, param_user_id, TRUE)
	ON DUPLICATE KEY UPDATE vote = TRUE;

END
//




DELIMITER //

CREATE PROCEDURE downvoteThread(param_thread_id INT, param_user_id INT)

BEGIN

	INSERT INTO thread_votes(thread_id, user_id, vote)
    VALUES (param_thread_id, param_user_id, FALSE)
	ON DUPLICATE KEY UPDATE vote = FALSE;

END
//





DELIMITER //

CREATE PROCEDURE upvoteComment(param_comment_id INT, param_user_id INT)

BEGIN

	INSERT INTO comment_votes(comment_id, user_id, vote)
    VALUES (param_comment_id, param_user_id, TRUE)
	ON DUPLICATE KEY UPDATE vote = TRUE;

END
//




DELIMITER //

CREATE PROCEDURE downvoteComment(param_comment_id INT, param_user_id INT)

BEGIN

	INSERT INTO comment_votes(comment_id, user_id, vote)
    VALUES (param_comment_id, param_user_id, FALSE)
	ON DUPLICATE KEY UPDATE vote = FALSE;

END
//




DELIMITER //

CREATE PROCEDURE getUserByName(param_username VARCHAR(30))

BEGIN

	SELECT u.user_id, u.email, u.username, u.user_password, u.first_name, u.last_name, u.created_at, u.is_active FROM users u WHERE u.username = param_username;

END
//





DELIMITER //

CREATE PROCEDURE getUserById(param_user_id INT)

BEGIN

	SELECT u.user_id, u.email, u.username, u.first_name, u.last_name, u.created_at, u.is_active FROM users u WHERE u.user_id = param_user_id;

END
//