const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];
  let numbers = [];
  let alphabets = [];
  let highestLowercaseAlphabet = [];
  let highestLowercase = '';

  // Process input
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (item.length === 1 && item.match(/[a-zA-Z]/)) {
      alphabets.push(item);
      if (item >= 'a' && item <= 'z' && item > highestLowercase) {
        highestLowercase = item;
      }
    }
  });

  if (highestLowercase) {
    highestLowercaseAlphabet = [highestLowercase];
  }

  // Response object
  res.json({
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
