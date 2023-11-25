const express = require('express');
const app = express();
const port = 3001;
const routerApi = require('./routes');

//middleware
console.clear();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello to my server in express');
});

app.listen(port, () => {
  console.log('My port:' + port);
});

routerApi(app);
