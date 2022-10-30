const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        bookId: {
            type: mongoose.ObjectId, default: null,
        },
        titleId: {
            type: String, require: true, trim: true,
        },
        isPending: {
            type: Boolean, require: true,
        },
        userId: {
            type: mongoose.ObjectId, required: true, trim: true,
        },
        isReturn: {
            type: Boolean, required: true, default: false,
        },
        returnDate: { 
            type: Date, required: true,
        }
    },
    {
        timestamps: true,
    },
);

const Transaction = mongoose.model('Transaction', schema);

module.exports = { Transaction };