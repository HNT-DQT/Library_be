const {Cart} = require('../app/models/cart.model');

class CartService{
    
    getAll = async(userId) => {
    
        const items = await Cart.find({userId: userId});
        return items;

    }

    findById = async(itemId) => {
        const item = await Cart.findById(itemId);
        return item ? item.toObject() : item;
    }

    findExistedTitle = async(item) => {
        const cItem = await Cart.findOne(item);
        return cItem ? cItem.toObject() : cItem;
    }

    delete = async(itemId) => {

        const item = await Cart.findOneAndDelete({_id: itemId});
        return  item ? item.toObject() : item;

    }

    create = async(item) => {

        const nItem = await Cart.create(item);
        return  nItem ? nItem.toObject() : nItem;
    }
    
}

module.exports = new CartService;