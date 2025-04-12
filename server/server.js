const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use port 3001 or environment variable

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});