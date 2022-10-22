const bookService = require('../../services/book.service');
const Util = require('../../utils/util');

class BookController{
    
    // get /:slug
    getAllBooks = async(req, res) => {
        
        try{
            const titleSlug = req.params.titleslug;

            const books = await bookService.getAll(titleSlug);

            return res.json(books);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
    }

    getBook = async(req, res) => {

        try{
            const bookId = req.params.id;

            const book = await bookService.findById(bookId);

            if(!book) return res.status(404).json({message: 'Not found'});

            return res.json(book);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    createBook = async(req, res) => {

        try{
            const body = req.body;
            delete body.status;

            const nBook = await bookService.create({titleSlug: body.titleSlug});

            return res.json(nBook);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    updateBook = async(req, res) => {

        try{
            const bookId = req.query.id;
            const body = req.body;

            body._id = bookId;

            if(body.status) body.status = Util.formatStatus(body.status);

            const book = await bookService.update(body);

            if(!book) return res.status(404).json('Not found');

            return res.json(book);


        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    deleteBook(req, res){

        res.json({content: 'delete book'});

    }

}

module.exports = new BookController;