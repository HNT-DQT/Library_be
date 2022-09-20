
class TransactionController{
    
    // get /:slug
    index(req, res){
        
        res.json({content: 'get all trans of user'});

    }

    getTransaction(req, res){

        res.json({content: 'get trans'});

    }

    createTransaction(req, res){

        res.json({content: 'create trans'});

    }

    updateTransaction(req, res){

        res.json({content: 'update trans'});

    }

    deleteTransaction(req, res){

        res.json({content: 'delete trans'});

    }

}

module.exports = new TransactionController;