const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        titleSlug: {
            type: String, required: true, trim: true,
        },
        status: {
            type: String, required: true, trim: true, default: "A",
        },
        note: {
            type: String, required: false, trim: true, default: "",
        }
    },
    {
        timestamps: true,
    },
);

const Book = mongoose.model('Book', schema);

const Status = {
    AVAILABLE: "A", UNAVAILABLE: "UNA", BROKEN_OR_LOST: "BOL"
}

module.exports = { Book, Status };