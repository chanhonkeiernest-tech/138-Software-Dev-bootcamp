const express = require("express");
const app = express();
<<<<<<< HEAD
require('dotenv').config();
const PORT = process.env.PORT || 3000;
=======
const PORT = process.env.PORT || 3001;
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77

// TODO: Middleware to parse JSON
app.use(express.json());

// TODO: Create a mock database (use an array of objects to represent data)
// Example: let items = [{ id: 1, name: 'Item1', description: 'A sample item' }];
let items = [
<<<<<<< HEAD
  { id: 1, name: 'DVD Title: Bad Batch', price: 30, amount: 10 },
  { id: 2, name: 'Orange', price: 1, amount: 5000 }
];
// GET route to retrieve all items
app.get('/items', (req, res) => {
=======
  { id: 1, name: "Item1", description: "A sample item" },
  { id: 2, name: "Item2", description: "Another sample item" },
];

// GET route to retrieve all items
app.get("/items", (req, res) => {
  // TODO: Return the list of items from the mock database
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77
  res.json(items);
});

// GET route to retrieve a single item by ID
<<<<<<< HEAD
app.get('/items/:id', (req, res) => {
  const target=req.params.id;
  if(!isNaN(target)){
    const findings= items.find(b => b.id==parseInt(target));
    if (!findings) return res.status(404).send('No such item');
    return res.json(findings);
  }else{
    return res.status(404).send('Entry error');
  }
 
=======
app.get("/items/:id", (req, res) => {
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77
  // TODO: Extract the ID from the request parameters
  // TODO: Find the item in the database with the given ID
  // TODO: If the item is found, return it; otherwise, send a 404 response
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// POST route to create a new item
<<<<<<< HEAD
app.post('/items', (req, res) => {
  if(isNaN(req.body.price)||isNaN(req.body.amount))return res.status(404).send('Entry error');
  const newitem={
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price,
    amount: req.body.amount
  };
  items.push(newitem);
  return res.status(201).json(newitem);
=======
app.post("/items", (req, res) => {
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77
  // TODO: Extract data from the request body
  // TODO: Generate a unique ID for the new item
  // TODO: Add the new item to the mock database
  // TODO: Return the newly created item with a 201 status
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT route to update an existing item by ID
app.put("/items/:id", (req, res) => {
  // TODO: Extract the ID from the request parameters
  // TODO: Find the item in the database with the given ID
  // TODO: Update the item's properties with data from the request body
  // TODO: If the item is found and updated, return the updated item
  // TODO: If the item is not found, send a 404 response
<<<<<<< HEAD
  if(isNaN(req.body.price)||isNaN(req.body.amount))return res.status(404).send('Entry error');
  const target=req.params.id;
  if(!isNaN(target)){
    const findings= items.find(b => b.id==parseInt(target));
    if (!findings) return res.status(404).send('No such item');
    findings.name=req.body.name || findings.name;
    findings.price=req.body.price || findings.price;
    findings.amount = req.body.amount || findings.amount;
    return res.json(findings);

  }else{
    return res.status(404).send('Entry error');
=======
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77
  }
});

// DELETE route to delete an item by ID
app.delete("/items/:id", (req, res) => {
  // TODO: Extract the ID from the request parameters
  // TODO: Find and remove the item with the given ID from the database
  // TODO: If the item is found and deleted, return a success message
  // TODO: If the item is not found, send a 404 response
<<<<<<< HEAD
  const target=req.params.id;
  if(!isNaN(target)){
    const findings= items.findIndex(b => b.id==parseInt(target));
    if (findings === -1) return res.status(404).send('No such item');
    items.splice(findings, 1);
    return res.json(items);
  }else{
    return res.status(404).send('Entry error');
=======
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json({ message: "Item deleted", item: deletedItem[0] });
  } else {
    res.status(404).json({ message: "Item not found" });
>>>>>>> 001d8e12b6444b165ce37d3067b9438088781d77
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`CRUD app is running at http://localhost:${PORT}`);
});
