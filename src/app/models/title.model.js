const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: {
            type: String, required: true, trim: true,
        },
        pages: {
            type: Number, required: true,
        },
        publishYear: {
            type: Number, required: true,
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
            type: String, slug: 'name', forceIdSlug: true,
        }

    },
    {
        timestamps: true,
    },
);

class TitleDTO {
    _id;
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
        this._id = data._id;
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