const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        role: { 
            type: Number, 
            required: true,
            default: 0,
        },
        slug: { 
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const Account = mongoose.model('Account', schema);

const Role = {
    USER: "USER", LIBRARIAN: "LIBRARIAN", ADMIN: "LIBRARIAN"
}

const Gender = {
    MALE: "MALE", FEMALE: "FEMALE", NONE: "NONE"
}

const Status = {
    LOCKED: "LOCKED", ACTIVE: "ACTIVE"
}

module.exports = { Account, Role, Gender, Status};