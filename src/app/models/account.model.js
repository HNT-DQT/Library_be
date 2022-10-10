const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        email: {
            type: String, required: true, trim: true,
        },
        phoneNumber: {
            type: String, required: true, trim: true,
        },
        password: {
            type: String, required: true, trim: true,
        },
        role: { 
            type: String, required: true, trim: true,
        },
        name: {
            type: String, required: true, trim: true,
        },
        gender: {
            type: String, required: true, trim: true,
        },
        address: { 
            type: String, required: true, trim: true,
        },
        isLock: { 
            type: Boolean, required: true, default: false,
        }
    },
    {
        timestamps: true,
    },
);

const Account = mongoose.model('Account', schema);

class AccountDTO {
    email;
    phoneNumber;
    name;
    gender;
    address;
    isLock;
    createdAt;
    updatedAt;

    constructor (account){
        this.email = account.email;
        this.phoneNumber = account.phoneNumber;
        this.name = account.name;
        this.gender = account.gender;
        this.address = account.address;
        this.isLock = account.isLock;
        this.createdAt = account.createdAt;
        this.updatedAt = account.updatedAt;
    };
}

const Role = {
    USER: "USER", LIBRARIAN: "LIBRARIAN", ADMIN: "ADMIN"
}

const Gender = {
    MALE: "MALE", FEMALE: "FEMALE", NONE: "NONE"
}


module.exports = { Account, AccountDTO, Role, Gender};