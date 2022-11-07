const txnService = require('../../services/transaction.service');
const cartService = require('../../services/cart.service');
const accountService = require('../../services/account.service')
const bookService = require('../../services/book.service')
const titleService = require('../../services/title.service');
const Util = require('../../utils/util');
const authz = require('../../middlewares/authorization');

class TransactionController{
    
    getAllTxn = async(req, res) => {
        
        try {
            const userId = req.query.userId;
            // console.log(userId);

            let allTxn = await txnService.getAll(userId);

            for(let i in allTxn)
                allTxn[i] = await this.formatReturnedTxn(allTxn[i]);

            return res.json(allTxn);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    getAllMyTxn = async(req, res) => {
        
        try {
            const userId = authz.requestAccount(req, res);

            let allTxn = await txnService.getAll(userId);

            for(let i in allTxn)
                allTxn[i] = await this.formatReturnedTxn(allTxn[i]);

            return res.json(allTxn);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    getTxn = async(req, res) => {

        try {
            const txnId = req.params.id;

            let txn = await txnService.findById(txnId);

            if(!txn) return res.status(404).json("Not found");

            txn = await this.formatReturnedTxn(txn);

            return res.json(txn);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    createOnlineTxn = async(req, res) => {

        try{
            const body = req.body;
            const userId = authz.requestAccount(req, res);
            body.userId = userId;
            body.isPending = true;

            if(!(await titleService.checkExistedId(body.titleId)))
                return res.status(400).json({message: 'Title is not found'});

            body.returnDate = Util.formatReturnedDate(body.time, new Date());

            if(req.query.fromCart == true){
                let item = {titleId: body.titleId, userId: body.userId};
                const cItem = await cartService.findExistedTitle(item);
                if(await cartService.delete(cItem._id))
                    console.log('Delete from cart successfully');
            }

            const txn = await txnService.create(body);

            if(!txn) return res.status(500).json('Cannot create transaction');
            
            return res.json(txn);
        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
    }

    createOfflineTxn = async(req, res) => {

        try{
            const body = req.body;
            body.isPending = false;

            const book = await bookService.findById(body.bookId);
            body.titleId = book.titleId;

            body.returnDate = Util.formatReturnedDate(body.time, new Date());

            const txn = await txnService.create(body);

            if(!txn) return res.status(500).json('Cannot create transaction');
            
            return res.json(txn);
            

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
    }

    updateTxn = async(req, res) => {

        try{
            const body = req.body;
            const txnId = req.query.id;

            const txn = await txnService.findById(txnId);
            if(!txn) return res.status(404).json({message: 'Not found'});
            
            body._id = txnId;

            if(body.time)
                body.returnDate = Util.formatReturnedDate(body.time, txn.returnDate);

            const nTxn = await txnService.update(body);

            return res.json(nTxn);
            

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    formatReturnedTxn = async (txn) => {
        txn = txn.toObject();
        txn.user = await accountService.findById(txn.userId);
        txn.title = await titleService.findById(txn.titleId);
        txn.book = await bookService.findById(txn.bookId);
        delete txn.userId;
        delete txn.titleId;
        delete txn.bookId;
        return txn;
    }

}

module.exports = new TransactionController;