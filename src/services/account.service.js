const {Account} = require('../app/models/account.model');

class AccountService{
    
    getAll = async() => {
    
        return await Account.find();

    }

    create = async(acc) => {

        return await Account.create(acc);

    }

    checkEmail = async(param) => {

        return await Account.exists({email: param});
    }

    checkPhoneNumber = async(param) => {

        return await Account.exists({phoneNumber: param});
    }

    findUsername = async(username) => {

        return await Account.findOne({$or:[
            {email: username},
            {phoneNumber: username}
        ]});

    }

    findById = async(accId) => {

        return await Account.findById(accId);

    }

    
}

module.exports = new AccountService;