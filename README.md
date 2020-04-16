# HIHI WEEK 7 README

## PLS HELP US 🙏🧠

### USER MODEL
We are having problems with one of our functions. 
`getIdFromUsername(username)` in file `model/users-model.js` line 35. Should be returning an id number, but is returning an empty object. 
It works if you type directly into psql so not sure why this is happening. Because of this, route `/:user/books` isn't functioning. 

## Project Description
A REST API that returns JSON data. Our database holds data about the books that FAC cohort members have read.

## Written by: 
- [Ina](https://github.com/itsina96)
- [Hannah](https://github.com/hannahgooding)
- [Ivo](https://github.com/Ivo-Evans)
- [Hettie](https://github.com/HettieM)

## Technologies

### Set up with local deployment
1. Clone this repo
2. Run `$ npm install` on your terminal to install Node dependencies
3. Run these commands in your terminal to set up user, app database and test database
```
$ psql -c "CREATE USER myuser WITH PASSWORD 'mypassword'"
$ psql -c "ALTER USER myuser WITH SUPERUSER"
$ psql -c "CREATE DATABASE readers_coders_db WITH OWNER myuser"
$ psql -c "CREATE DATABASE readers_coders_test_db WITH OWNER myuser"
```
5. Create a `.env` file in the root folder according to `.env-example`
6. Comment out the following line on your `connection.js` file which connects to the Heroku database
```
// connectionString: process.env.DATABASE_URL,
```
7. Run `psql` to enter Postgres CLI
8. Connect to database `# \c readers_coders_dbb`
9. Initialise database `# \i database/init.sql`
10. Run `$ npm run dev` to run app on localhost
11. Run `psql` and connect to test database `# \c readers_coders_test_db`
12. Run `$ npm test` to run tests

### Deployed virtually to Heroku
[Readers + Coders](https://readers-and-coders.herokuapp.com/books)
- Doesn't entirely work
- Have deployed with successful build
- Have successfully initialise Postgres database

## Database Schema
```sql
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    cohort INTEGER
);
```
```sql
CREATE TABLE books
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    author TEXT,
    fiction BOOLEAN
);
```
```sql
CREATE TABLE user_books
(
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, book_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON UPDATE CASCADE ON DELETE CASCADE
);
```

## API endpoints

Querying a book that has spaces in it requires that you insert `%20` for each space in cURL, we are not sure about Postman

#### Routes where no Authentication is required

###### GET /books
Gets data on all books in database

###### GET /books/fiction
Get all fiction books from database

###### GET /books/non-fiction
Get all non-fiction books from database

###### GET /books/:id
Gets books by their database id, e.g.`/books/2`

###### GET /users
Gets a list of users

###### POST /users
Route for signing up, creates your access token

###### POST /login
Route for logging in, you receive an access token

###### GET /:user/books
DISCLAIMER: currently doesn't work
Gets books associated with a particular username, e.g.`/ivo/books/`

###### GET /:book/users
Gets all users who have read a particular book, e.g. 
`/wallace-and-grommit/users`

#### Routes where authentication is required

###### POST /books
Adds a book to the database
```json
{ 
  "title": "The Adventures of Gregor Cookie",
  "author": "Vatsal Kanoria",
  "fiction": true
}
```

###### PUT books/:id
Edits info on a particular book, e.g.

```json
{ 
  "title": "The Adventures of Gregor Cookie",
  "author": "Vatsal Kanoria",
  "fiction": false
}
```

###### DELETE books/:id
Deletes a particular book
