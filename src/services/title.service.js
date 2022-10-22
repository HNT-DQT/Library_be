const {Title, TitleDTO} = require('../app/models/title.model');

class TitleService{
    
    getAll = async() => {
    
        const titles = await Title.find();
        return titles;

    }

    findBySlug = async(slug) => {

        const title = await Title.findOne({slug: slug});

        return title ? new TitleDTO(title) : title;

    }

    update = async(title) => {

        await Title.findOneAndUpdate({_id: title._id}, title);
        const nTitle = await Title.findById(title._id);

        return nTitle ? new TitleDTO(nTitle) : nTitle;

    }

    delete = async(itemId) => {

        

    }

    create = async(title) => {
     
        const nTitle = await Title.create(title);
        
        return nTitle ? new TitleDTO(nTitle) : nTitle;

    }
    
}

module.exports = new TitleService;