const express = require('express');
const app = express();
const port = 3001;
const routerApi = require('./routes');
const {
  errorHandler,
  logErrors,
  boomHandler,
} = require('./middlewares/error.handle');
const boom = require('@hapi/boom');

//middleware
console.clear();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello to my server in express');
});

routerApi(app);

app.use(logErrors);
app.use(boomHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port:' + port);
});
