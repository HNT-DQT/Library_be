const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        userId: {
            type: mongoose.ObjectId, required: true, trim: true,
        },
        titleSlug: {
            type: String, required: true, trim: true,
        }
    },
    {
        timestamps: true,
    },
);

const Cart = mongoose.model('Cart', schema);

module.exports = { Cart };