const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [{name: 'sss', email: 'sss@example.com'}];
app.get('/user', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
