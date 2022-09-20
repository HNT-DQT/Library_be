
class BookController{
    
    // get /:slug
    index(req, res){
        
        res.json({content: 'get all book of title'});

    }

    getBook(req, res){

        res.json({content: 'get book'});

    }

    createBook(req, res){

        res.json({content: 'create book'});

    }

    updateBook(req, res){

        res.json({content: 'update book'});

    }

    deleteBook(req, res){

        res.json({content: 'delete book'});

    }

}

module.exports = new BookController;