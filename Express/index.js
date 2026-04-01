const express = require('express');
const app = express();

console.log('Hello World! This is the Express server.');

app.get('/Student', (req, res) => {
    res.send('This is the Express server!');
});

const port = 3000 || process.env.port;

app.listen(port, () => {        
  console.log(`Server is running on port ${port}`);
});


