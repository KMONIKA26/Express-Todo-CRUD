const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Path to the db.json file
const dbPath = path.join(__dirname, 'db.json');

// Helper function to read data from db.json
const readData = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

// Helper function to write data to db.json
const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Get all todos
app.get('/todos', (req, res) => {
  const data = readData();
  res.json(data.todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  const data = readData();
  data.todos.push(newTodo);
  writeData(data);
  res.status(201).json(newTodo);
});

// Update status of todos with even ID
app.patch('/todos/update-even', (req, res) => {
  const data = readData();
  data.todos.forEach(todo => {
    if (todo.id % 2 === 0 && !todo.status) {
      todo.status = true;
    }
  });
  writeData(data);
  res.json(data.todos);
});

// Delete todos with status true
app.delete('/todos/delete-completed', (req, res) => {
  let data = readData();
  data.todos = data.todos.filter(todo => !todo.status);
  writeData(data);
  res.json(data.todos);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
