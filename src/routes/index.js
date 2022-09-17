const accountRouter = require('./account');
const siteRouter = require('./site');
const titleRouter = require('./title');
const bookRouter = require('./book');
const transactionRouter = require('./transaction');
const extensionRouter = require('./extension');
const notiRouter = require('./notification');

function route(app){
    
    app.use('/account', accountRouter);

    app.use('/title', titleRouter);

    app.use('/book', bookRouter);

    app.use('/transaction', transactionRouter);

    app.use('/extension', extensionRouter);

    app.use('/notification', notiRouter);
      
    app.use('/', siteRouter);  

}

module.exports = route;