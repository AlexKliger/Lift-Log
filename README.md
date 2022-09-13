# Lift Log
A journaling application for weight lifting.

## How It's Made:
React, Express, MongoDB

### Server:
The express server routes to a RESTful API that supports CRUD operations.

The server only responds with the index.html file from the client's React build folder. All major page routing is then handled by the frontend.

Authentication is handled by passport.js and uses a local strategy.

Data is stored using mongoDB on mongoAtlas and models are defined with the mongoose package.

### Client:
The frontend is built with React. Various components make up the user interface that make CRUD requests to the backend.

## Lessons Learned:
My first attempt at a full stack application using the MERN stack.