// Practice Exercise: Create a Basic Express App with GET Routes

// 1. TODO: Import the 'express' module to create a server.
<<<<<<< HEAD
const express = require('express');
const PORT = 2212;
const app = express();
const jtext={text:"Hello, Express!"};
const jdata=require('./');
// 2. TODO: Create a basic route '/' that sends a simple JSON response with a message like 'Hello, Express!'
express
app.get('/', (req, res)=>
     res.json(jtext));

// 3. TODO: Create a new route '/user' that sends a JSON response with the user's name and age (use sample data)
app.get('/user', (req, res)=>
    res.send(JSON.stringify(jtext)));

// 4. TODO: Set the server to listen on a port 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
=======
const express = require("express");
const app = express();

// 2. TODO: Create a basic route '/' that sends a simple JSON response with a message like 'Hello, Express!'
app.get("/", (req, res) => {
  res.json({ message: "Hello, Express!" });
});

// 3. TODO: Create a new route '/user' that sends a JSON response with the user's name and age (use sample data)
app.get("/user", (req, res) => {
  res.json({ name: "John Doe", age: 25 });
});

// 4. TODO: Set the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77
