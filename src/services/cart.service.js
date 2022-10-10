const {Cart} = require('../app/models/cart.model');

class CartService{
    
    getAll = async(uId) => {
    
        const carts = await Cart.find({userId: uId});
        return carts.toObject();

    }

    delete = async(itemId) => {

        const item = await Cart.findOneAndDelete({_id: itemId});
        return item.toObject();

    }

    create = async(cart) => {

        const nCart = await Cart.create(cart);
        return nCart.toObject();

    }
    
}

module.exports = new CartService;