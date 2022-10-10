const {Account, AccountDTO} = require('../app/models/account.model');

class AccountService{
    
    getAll = async(cond) => {
    
        const accounts = await Account.find(cond);
        let accountsDTO = [];
        accounts.forEach(account => {
            accountsDTO.push(new AccountDTO(account));
        });
        return accountsDTO;

    }

    update = async(acc) => {

        await Account.findOneAndUpdate({_id: acc._id}, acc);
        const account = await Account.findById(acc._id);

        if(!account) return account;
        else return new AccountDTO(account);

    }

    create = async(acc) => {

        const account = await Account.create(acc);

        if(!account) return account;
        else return new AccountDTO(account);

    }

    checkEmail = async(param) => {

        return await Account.exists({email: param});
    }

    checkPhoneNumber = async(param) => {

        return await Account.exists({phoneNumber: param});
    }

    // dont need dto
    findUsername = async(username) => {

        const account = await Account.findOne({$or:[
            {email: username},
            {phoneNumber: username}
        ]});

        return account.toObject();

    }

    findById = async(accId) => {

        const account = await Account.findById(accId);
        if(!account) return account;
        else return new AccountDTO(account);

    }

    
}

module.exports = new AccountService;