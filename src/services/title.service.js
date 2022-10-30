const {Title, TitleDTO} = require('../app/models/title.model');
const {Book, Status} = require('../app/models/book.model');

class TitleService{
    
    getAll = async() => {
    
        const titles = await Title.find();

        for (let i in titles){
            let title = titles[i];
            titles[i] = await this.countQuantity(title.toObject());
        }
        
        return titles;

    }

    findBySlug = async(slug) => {

        let title = await Title.findOne({slug: slug});

        if(!title) return title;

        title = await this.countQuantity(title);
        return new TitleDTO(title);

    }

    findById = async(titleId) => {
        let title = await Title.findById(titleId);

        if(!title) return title;

        title = await this.countQuantity(title);
        return new TitleDTO(title);
    }

    checkExistedId = async(titleId) => {
        return await Title.exists({_id: titleId});
    }

    update = async(title) => {

        await Title.findOneAndUpdate({_id: title._id}, title);
        const nTitle = await Title.findById(title._id);

        return nTitle ? new TitleDTO(nTitle) : nTitle;

    }

    delete = async(itemId) => {

        

    }

    create = async(title) => {
     
        let nTitle = await Title.create(title);
        if(!nTitle) return nTitle;

        nTitle = await this.countQuantity(nTitle);
        return new TitleDTO(nTitle);

    }

    countQuantity = async(title) => {
        title.quantity = await Book.countDocuments({titleId: title._id});
        title.availability = await Book.countDocuments({titleId: title._id, status: Status.AVAILABLE});
        return title;
    }
    
}

module.exports = new TitleService;