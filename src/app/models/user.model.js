const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Status} = require('./account.model');

const schema = new Schema(
    {
        accountId: {
            type: Schema.ObjectId,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        gender: {
            type: String,
            required: true,
            trim: true,
        },
        address: { 
            type: String, 
            required: true,
            trim: true,
        },
        isLock: { 
            type: Boolean,
            required: true,
            default: Status.ACTIVE,
        },
        cart: {
            type: Array,
            default: [],
        }
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', schema);

module.exports = { User };