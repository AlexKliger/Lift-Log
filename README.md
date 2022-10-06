# Lift Log
A fitness journaling application that I made to suit my personal needs and whomever finds it useful.

## How It's Made:
React, Express, MongoDB

### Server:
The backend server is built using express.js which routes to a RESTful API that supports CRUD operations.

Users are able to register accounts and login using a local strategy. Username and hashed passwords are stored on MongoDB and authentication/session management is handled by passport.js.

Data is stored using MongoDB on Mongo Atlas and models are defined as schema using Mongoose.

### Client:
The frontend is built using React.js. Requests are made to the backend using the fetch API and displays the returned data in a convenient and accesible layout.

## Optimizations

### Authentication & Session Management
Using a local strategy to store and authenticate users poses security risks and is not scalable. A better solution may involve using Google/Microsoft/Facebook/etc authentication services.