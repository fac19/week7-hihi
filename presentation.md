# WEEK 7 REST API HIHI
## Readers And Coders
A REST API that returns JSON data. Our database holds data about the books that FAC cohort members have read.

---

📖 See who's read a book  
📚 See what books somebody has read  
📕 Submit your own book recommendations

---

![](https://media.giphy.com/media/VcizxCUIgaKpa/giphy.gif)


---

## Planning

![](https://i.imgur.com/AI3HbjG.png)

---


![](https://i.imgur.com/KUiCVIL.png)

---

## WHAT WE ACHIEVED
![](https://media.giphy.com/media/craZZHkABpd9m/giphy.gif)

---

## Deploying on Heroku!
And actually knowing how to fix it (ish)😇

- ALWAYS `npm run server` before you push to master!
- Add JWT_SECRET to Config Vars

---

## Query across three tables with junction
- User id from username
- book ids from user id
- Book names from book ids) 
- learnt a lot in the process

---

## WHAT WE WOULD IMPROVE
![](https://media.giphy.com/media/h0cVMLhAiBtug/giphy.gif)

---

## Join + Junction Tables
Get all users who have read one book: Book table -> Junction table -> User table;
Get all books read by one user: User table -> Junction Table -> Book table.

All through models
``` Javascript
getAllUserBooksHandler();
    getIdFromUsername();
        getBooksFromUser();
            getMultipleBooksById();
```

---


![Spongebob stressed](https://media.giphy.com/media/3DnDRfZe2ubQc/giphy.gif)

---

Getting all users with a join table. 
(Start with a book id)
``` SQL 
SELECT user.username
FROM user_books
WHERE book.id = (book id)
INNER JOIN users ON user_books.user_id=user.id
```

```Javascript
getIdFromTitle();
    getUsernamesFromBookId();
```

---

![Dee Dee manic typing](https://media.giphy.com/media/11BbGyhVmk4iLS/giphy.gif)


---

### Mental model of routes and endpoints
- Our routes don't match up properly, e.g. its hard to get some information that you need for other requests
- We completely forgot to implement some functionality, like saying you'd read a book
- More-careful planning, and more experience will be very helpful in the future

---

### Database checks before you add incomplete entries
e.g. You can add a new user without the `cohort` property and it is entered as `null`
![](https://i.imgur.com/FUFm8TM.png)

---

## Learning objectives

![](https://media.giphy.com/media/qxsgm2X2Fb5WE/giphy.gif)

---

### Hannah
- Working on a purely backend project
- Writing a server from scratch using Express
- Authentication Middleware

---

### Ivo
- Brushing up on db skills
- Postman
- Middleware and Express application logic

---

### Ina

- Postman
- Using Express to set up a server
- Writing middleware

---

### Hettie
- Postman 
- Password encryption
- Code structuring and layout
- Join tables
