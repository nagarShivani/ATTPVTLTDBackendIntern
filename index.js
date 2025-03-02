const express = require('express');
const employees = require('./employees'); 

const app = express();
const PORT = 8000;


app.get('/', (req, res) => {
  res.send('Welcome to the Employee API. Use /employees to get the employee list.');
});


app.get('/employees', (req, res) => {
  res.json(employees);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
