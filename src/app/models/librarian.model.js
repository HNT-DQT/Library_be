const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        }
    },
    {
        timestamps: true,
    },
);

const Librarian = mongoose.model('Librarian', schema);

module.exports = { Librarian };