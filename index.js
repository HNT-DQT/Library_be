const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./src/configs/db');
const route = require('./src/routes');
const {PORT} = require('./src/configs/config');

const app = express();

/* connect db */ 
db.connect();

// //static file
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.json());  // for parsing application/json

/* http logger */
app.use(morgan('combined'));

/* router init */
route(app);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});