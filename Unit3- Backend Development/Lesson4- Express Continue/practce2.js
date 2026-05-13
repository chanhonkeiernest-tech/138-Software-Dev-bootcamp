const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// TODO: Middleware to parse JSON
app.use(express.json());

// TODO: Create a mock database (use an array of objects to represent data)
// Example: let items = [{ id: 1, name: 'Item1', description: 'A sample item' }];
let items = [
  { id: 1, name: 'DVD Title: Bad Batch', price: 30, amount: 10 },
  { id: 2, name: 'Orange', price: 1, amount: 5000 }
];
// GET route to retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET route to retrieve a single item by ID
app.get('/items/:id', (req, res) => {
  const target=req.params.id;
  if(!isNaN(target)){
    const findings= items.find(b => b.id==parseInt(target));
    if (!findings) return res.status(404).send('No such item');
    return res.json(findings);
  }else{
    return res.status(404).send('Entry error');
  }
 
  // TODO: Extract the ID from the request parameters
  // TODO: Find the item in the database with the given ID
  // TODO: If the item is found, return it; otherwise, send a 404 response
});

// POST route to create a new item
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
  // TODO: Extract data from the request body
  // TODO: Generate a unique ID for the new item
  // TODO: Add the new item to the mock database
  // TODO: Return the newly created item with a 201 status
});

// PUT route to update an existing item by ID
app.put('/items/:id', (req, res) => {
  // TODO: Extract the ID from the request parameters
  // TODO: Find the item in the database with the given ID
  // TODO: Update the item's properties with data from the request body
  // TODO: If the item is found and updated, return the updated item
  // TODO: If the item is not found, send a 404 response
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
  }
});

// DELETE route to delete an item by ID
app.delete('/items/:id', (req, res) => {
  // TODO: Extract the ID from the request parameters
  // TODO: Find and remove the item with the given ID from the database
  // TODO: If the item is found and deleted, return a success message
  // TODO: If the item is not found, send a 404 response
  const target=req.params.id;
  if(!isNaN(target)){
    const findings= items.findIndex(b => b.id==parseInt(target));
    if (findings === -1) return res.status(404).send('No such item');
    items.splice(findings, 1);
    return res.json(items);
  }else{
    return res.status(404).send('Entry error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`CRUD app is running at http://localhost:${PORT}`);
});
