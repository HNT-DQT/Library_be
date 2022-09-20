const {Account} = require('../app/models/account.model');

class AccountService{
    
    async getAll(){
    
        return await Account.find();

    }

    async create(acc){

        return await Account.create(acc);

    }

    
}

module.exports = new AccountService;