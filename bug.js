const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling MISSING HERE
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5; // 50% chance of success
  if (success) {
    return;
  } else {
    throw new Error('Something went wrong!');
  }
}