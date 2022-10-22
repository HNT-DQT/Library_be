const {Account, AccountDTO} = require('../app/models/account.model');

class AccountService{
    
    getAll = async(conds) => {
    
        const accounts = await Account.find(conds);
        for (let i in accounts)
            accounts[i] = new AccountDTO(accounts[i]);
        
        return accounts;

    }

    update = async(acc) => {

        await Account.findOneAndUpdate({_id: acc._id}, acc);
        const nAcc = await Account.findById(acc._id);

        return nAcc ? new AccountDTO(nAcc) : nAcc;

    }

    create = async(acc) => {

        const nAcc = await Account.create(acc);

        return nAcc ? new AccountDTO(nAcc) : nAcc;

    }

    checkEmail = async(param) => {

        return await Account.exists({email: param});
    }

    checkPhoneNumber = async(param) => {

        return await Account.exists({phoneNumber: param});
    }

    // dont need dto
    findUsername = async(username) => {

        const acc = await Account.findOne({$or:[
            {email: username},
            {phoneNumber: username}
        ]});

        return acc ? acc.toObject() : acc;

    }

    findById = async(accId) => {

        const acc = await Account.findById(accId);
        
        return acc ? new AccountDTO(acc) : acc;

    }

    
}

module.exports = new AccountService;