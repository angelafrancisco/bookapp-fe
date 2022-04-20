# Capstone Project: MERN Full-Stack App

**Week 11-12: April 2022. Final Capstone Project for General Assembly.**

.ReadMe book app: A full-stack MERN (React, Node/Express, MongoDB) web application to search and save books for vacation, fun, or anytime you need a reminder of what your next book should be!
<!-- App name ideas: Bookasauraus Recs, BookWorm, Book-Hook-Up, .ReadMe -->

## Deployed Website

Hosted via Heroku: https://readme-bookapp.herokuapp.com/


## Technology (MERN Stack)

- HTML | CSS | Javascript
- React
- Node | Express
- MongoDB | Mongoose


## Repositories
    - Front-End: https://github.com/angelafrancisco/bookapp-fe
    - Back-End: https://github.com/angelafrancisco/bookapp-be

<!-- 
## User Stories

- Homepage shows app features and links to login or register an account.
- User can create a new account and/or login.
- User can add plants to their "My Plants" section, creating a name, adding plant type, image url, room name, window direction, and notes about plant.
- Once a plant is added, user can edit or delete plant.
- User can complete watering tasks in their "My Tasks" section, as they are auto-generated after creating a new plant.
- User can add a plant status for any plant, adding status date, plant health (poor/good/excellent), and notes. Status can be edited or deleted. -->


## Wireframing

- Homepage (Images here)
- Favorites (Images here)
- Search (Images here)


## Capstone Project MVP Goals:

- A full-stack application (React + Node/Express/MongoDB)
- MVC file structure
- One model with full CRUD (book)
- Public API: [Google Books API](https://developers.google.com/books)
- Search functionality (using API data)
- Deployed online and accessible to the public via Heroku


## Capstone Project Stretch Goals:

- Responsive Design
- React Router Links
- Organize books by custom list name
    - Show first 3-4 books, link to see full list on new page
- Book recommendations (vacation reads, YA fantasy series, etc.)


## Model

``` 
const bookSchema = new Schema({
    title: { type: String }
    author: { type: String }
    description: { type: String }
    image: { type: String }
    read: { type: Boolean }
    listName: { type: String }
}, { timestamps: true })
```
