BEGIN;

    DROP TABLE IF EXISTS users
    CASCADE;
DROP TABLE IF EXISTS books
CASCADE;
DROP TABLE IF EXISTS user_books
CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    cohort INTEGER
);

CREATE TABLE books
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    author TEXT,
    fiction BOOLEAN
);

CREATE TABLE user_books
(
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, book_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON UPDATE CASCADE
);

INSERT INTO users
    (username, password, cohort)
VALUES
    ('hettie', '123', 19),
    ('ivo', 'password', 19);

INSERT INTO books
    (title, author, fiction)
VALUES
    ('The Bell Jar', 'Sylvia Plath', TRUE),
    ('The Clown Egg Register', 'Luke Stevenson', FALSE);


INSERT INTO user_books
    (user_id, book_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 2);

COMMIT;
