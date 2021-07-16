// contoh sederhana 
// const express = require('express');
// const app = express();

// app.listen(3000, function() {
//     console.log('listening on 3000')
//   })

//   app.get('/', (req, res) => {
//     res.send('Hello World')
//   })


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Task = require('./api/models/taskModel');
const routes = require('./api/models/routeModel');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb://localhost/mongoDb',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);