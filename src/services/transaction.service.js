const {Transaction} = require('../app/models/transaction.model');

class TransactionService{
    
    getAll = async(userId) => {
    
        let query = userId ? {userId: userId} : {};
        const allTxn = await Transaction.find(query);
        return allTxn;

    }

    findById = async(txnId) => {

        const txn = await Transaction.findById(txnId);

        return txn; // ? txn.toObject() : txn;

    }

    update = async(txn) => {

        await Transaction.findOneAndUpdate({_id: txn._id}, txn);
        const nTxn = await Transaction.findById(txn._id);

        return nTxn;

    }

    delete = async(itemId) => {

        

    }

    create = async(txn) => {
     
        const nTxn = await Transaction.create(txn);
        
        return nTxn ? nTxn.toObject() : nTxn;

    }
    
}

module.exports = new TransactionService;