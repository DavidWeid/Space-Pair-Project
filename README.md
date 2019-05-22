# Rover Reddit

Rover Reddit is live [here](https://rover-reddit.herokuapp.com/)!

## Overview
Rover Reddit is an application that hopes to create a positive and interactive community that is passionate about Mars, Rovers, and Space! Rover Reddit is a React-express application built in Node.js that utilizes MongoDB and Passport to create a dynamic and customizable user experience. This application is one of the few places that allows the User to browse Mar's Rover images directly from NASA - a massive catalog available to the public, but largely untapped due to the lack of a friendly UI. Rover Reddit aims to be the bridge between Mars and the User.
- - -
## User Interaction

- - -
## Dependencies
Server-side
  - Express / express-session
  - Passport / passport-local
  - Bcrypt
  - Mongoose
  - Axios
  - Cheerio
  - Moment
  - Concurrently / Nodemon
  - Morgan

Client-side
  - React
  - React-dom / react-router-dom
  - Reactstrap
  - Bootstrap
- - -
## Backend
To start up the application locally, use `npm start` in the root directory. In production, `node server.js` is run, while in development our server starts up with nodemon, and then our client assets start up. The server is set up to run on PORT 3001 during development. On startup, the application connects to our MongoDB "science-forum-db" and if `eraseDatabaseOnSync = true` we delete and seed the DB. The API server then starts up.

### Routing
When a path is hit, we first check if it is an API route - ".../api". If no API routes are hit, we send the react app. If an API route is hit, we choose our routing from 4 possibilities: "/posts", "/users", "/comments", or "/articles". When any of these are hit we route to the appropriate commands.

##### Posts
We have 1 POST route for our posts API. We use the route to: create a new Post with data from the client and link it to the User ("/").

We have 7 GET routes for our posts API. We use the routes to GET: all Posts ("/"), one Post by ID ("/postID:id"), all Posts created by a User ("/profile/user"), all Posts saved by a User ("/profile/user-saved"), all Posts liked by a User ("/profile/user-liked"), and all Posts in ascending or descending order by a sort paramater ("/sort/asc/:sort" and "/sort/des/:sort").

We have 9 PUT routes. We use the routes to: remove a User's saved roverImg ("/deleteImg"), update a User's liked/unliked Post by its ID ("/liked/:id" and "/unlike/:id"), update a User's saved/unsaved Post by its ID ("/saved/:id" and "/unsaved/:id"), to share a Post with a User's comment ("/shared"), to add or remove a User's commentID to a Post ("/newcomment/:postID/:commentID" and "/comments/removeComment/:postID/:commentID"), and to unshare a User's Article by title ("/unshareArticle/:title").

We have 2 DELETE routes. We use the routes to: delete a Post ("/delete/:id") and to delete a User's saved Article ("/deleteSavedArticle/:title").

##### Users

##### Comments
We have 1 POST route to create a new Comment with User info and the message ("/new/:postID").

We have 3 GET routes to get: all Comments ("/"), all Comments for a specific Post ("/postcomments/:postId"), and the number of Comments ("/count").

We have 1 DELETE route to delete a Comment ("/delete/:commentID").

##### Articles
We only have 1 route under "/api/articles" and it is a GET route to get articles using a scrape ("/scrape"). We scrape the space news website "https://www.space.com/news". Using `cheerio`, we grab our Articles and their information and return the Articles objects as an array to the client.

### Models
This application has 3 models: Post, User, and Comment. The Post model is the most flexible and is able to create a Post for images, articles, or disscussions (though discussions are not currently active).

##### Post
The Post model always contains a type STRING (roverImg, article, discussion), a shared BOOLEAN, a userID and username STRINGs, and a createAt DATE. If the Post is a roverImg it will have roverName, roverImg, roverCamera, roverSol, and roverEarthDate STRINGs. If the Post is an article it will have articleTitle, articleImg, articleAuthor, articleURL, articleDescription, and articleAltText STRINGs. Lastly, a discussion Post will have discussionTitle, discussionTheme, and discussionImg STRINGs. If a User comments, likes, or saves a Post, the Post is update at its userComment STRING (initial comment on Post creation if included), its commentIDs ARRAY (for new comments), its likes, and its savedUsers ARRAYs.

##### User
The User model always contains username, password, and email STRINGs. After interacting the Posts, the User is updated at its postIDs (created Posts), sharedIDs (shared Posts), roverImgArraySaved / roverImgArrayShared (saved and shared roverImgs), articleTitleSaved / articleTitleShared (saved and shared articles), commentIDs (created comments), and likes ARRAYs.

##### Comment
The Comment model is the simplest. It contains message, postID, userID, and username STRINGs. It also has a createAt DATE.

- - -
## Frontend

### Pages

### Compartmentalization

- - -
## Future Enhancements

---
### Contact Us
Please reach out to us with any comments, questions, or concerns at:
  - david.weid.2@gmail.com
  - mvcampbell3@gmail.com
