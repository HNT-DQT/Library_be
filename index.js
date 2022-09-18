const express = require('express');
const path = require('path');
const db = require('./src/config/db');
const route = require('./src/routes');
const {PORT} = require('./src/config/config');

const app = express();
//const port = 3000;

// connect db
db.connect();

// //static file
// app.use(express.static(path.join(__dirname, 'public')));

// // support frontend (post method)
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// //http logger
// app.use(morgan('combined'))

// //template engine
// app.engine('hbs', engine({extname: '.hbs'}));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources', 'views'));

//router init
route(app);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});