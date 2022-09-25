const accountRouter = require('./account.routes');
const siteRouter = require('./site.routes');
const titleRouter = require('./title.routes');
const bookRouter = require('./book.routes');
const transactionRouter = require('./transaction.routes');
const extensionRouter = require('./extension.routes');
const notiRouter = require('./notification.routes');
const cartRouter = require('./cart.routes');

function route(app){
    
    app.use('/account', accountRouter);

    app.use('/title', titleRouter);

    app.use('/book', bookRouter);

    app.use('/transaction', transactionRouter);

    app.use('/extension', extensionRouter);

    app.use('/notification', notiRouter);
    
    app.use('/cart', cartRouter);
      
    app.use('/', siteRouter);  

}

module.exports = route;