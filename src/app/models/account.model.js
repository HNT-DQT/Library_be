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

const Role = {
    USER: "USER", LIBRARIAN: "LIBRARIAN", ADMIN: "ADMIN"
}

const Gender = {
    MALE: "MALE", FEMALE: "FEMALE", NONE: "NONE"
}


module.exports = { Account, Role, Gender};