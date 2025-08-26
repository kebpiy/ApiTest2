const { randomInt } = require('crypto');
const express = require('express');

// generate a random price between min,max
function priceGen(min, max) {
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  return r.toFixed(2);
}

const app = express();
const port = 3000;

app.get('/prices', (_, res) => {
  const p = {
    'cylinders': {
      'small': priceGen(1, 2),
      'medium': priceGen(4, 6),
      'large': priceGen(7, 10),
    },
    'gasses': {
      'hydrogen': priceGen(18, 25),
      'helium': priceGen(20, 30),
      'oxygen': priceGen(15, 20),
      'nitrogen': priceGen(13, 18),
      'carbon dioxide': priceGen(5, 10),
    }
  };
  res.json(p);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
