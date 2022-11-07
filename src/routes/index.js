const accountRouter = require('./account.routes');
const siteRouter = require('./site.routes');
const titleRouter = require('./title.routes');
const bookRouter = require('./book.routes');
const txnRouter = require('./transaction.routes');
const notiRouter = require('./notification.routes');
const cartRouter = require('./cart.routes');

function route(app){
    
    app.use('/account', accountRouter);

    app.use('/title', titleRouter);

    app.use('/book', bookRouter);

    app.use('/transaction', txnRouter);

    app.use('/notification', notiRouter);
    
    app.use('/cart', cartRouter);
      
    app.use('/', siteRouter);  

}

module.exports = route;