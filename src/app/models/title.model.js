const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: {
            type: String, required: true, trim: true,
        },
        pages: {
            type: String, required: true, trim: true,
        },
        publishYear: {
            type: String, required: true, trim: true,
        },
        authors: { 
            type: Array, required: true, trim: true,
        },
        categories: {
            type: Array, required: true, trim: true,
        },
        quantity: {
            type: Number, required: true,
        },
        availability: { 
            type: Number, required: true,
        },
        description: { 
            type: String, required: true, trim: true,
        },
        trend: { 
            type: Number, required: true, default: 0,
        },
        picture: { 
            type: String, required: true, default: "",
        },
        slug: { 
            type: String, slug: 'name', unique: true,
        }

    },
    {
        timestamps: true,
    },
);

class TitleDTO {
    name;
    pages;
    publishYear;
    authors;
    categories;
    quantity;
    availability;
    description;
    picture;
    slug;
    createdAt;
    updatedAt;

    constructor (data){
        this.name = data.name;
        this.pages = data.pages;
        this.publishYear = data.publishYear;
        this.authors = data.authors;
        this.categories = data.categories;
        this.quantity = data.quantity;
        this.availability = data.availability;
        this.description = data.description;
        this.picture = data.picture;
        this.slug = data.slug;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

const Title = mongoose.model('Title', schema);

module.exports = { Title, TitleDTO};