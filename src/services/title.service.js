const {Title, TitleDTO} = require('../app/models/title.model');

class TitleService{
    
    getAll = async(uId) => {
    
        const carts = await Cart.find({userId: uId});
        return carts.toObject();

    }

    findBySlug = async(slug) => {

        const title = await Account.findOne({slug: slug});

        if(!title) return title;
        else return new TitleDTO(title);

    }

    update = async(data) => {

        await Title.findOneAndUpdate({_id: data._id}, data);
        const title = await Title.findById(body._id);

        if(!title) return title;
        else return new TitleDTO(title);

    }

    delete = async(itemId) => {

        const item = await Cart.findOneAndDelete({_id: itemId});
        return item.toObject();

    }

    // need to test
    create = async(data) => {
        const title = new Title(data);

        const nTitle = await Title.create(title);
        
        if(!nTitle) return nTitle;
        else return new TitleDTO(nTitle);

    }
    
}

module.exports = new TitleService;