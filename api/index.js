const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;


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

const whitelist = ["http://localhost:8080", "http://myapp.co"]
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)){
      callback(null, true)
    } else {
      callback(new Error("No permitido"))
    }
  }
}
app.use(cors())

app.get('/api/', (req, res) => {
  res.send('hello to my server in express');
});

routerApi(app);

app.use(logErrors);
app.use(boomHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port:' + port);
});
