const cartService = require('../../services/cart.service');
const titleService = require('../../services/title.service');
const authorization = require('../../middlewares/authorization');

class CartController{

    getCart = async(req, res) => {

        try {
            const userId = authorization.requestAccount(req, res);

            const carts = await cartService.getAll(userId);

            for (let i in carts){
                carts[i] = carts[i].toObject();
                const title = await titleService.findBySlug(carts[i].titleSlug);
                carts[i].title = title;
                delete carts[i].titleSlug;
            }

            return res.json(carts);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    addToCart = async(req, res) => {

        try {
            const titleSlug = req.body.titleSlug;
            const userId = authorization.requestAccount(req, res);
            const item = {titleSlug: titleSlug, userId: userId};

            if(await cartService.checkExistedTitle(item)) 
                return res.status(400).json({message: 'The title existed in your cart'});

            const nItem = await cartService.create(item);
            return res.json(nItem);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    deleteFromCart = async(req, res) => {

        try {
            const itemId = body.params.id;
            const userId = authorization.requestAccount(req, res);

            const item = await cartService.findById(itemId);

            if(item.userId !== userId) return res.status(400).json({message: 'You are not allowed'});

            const deletedItem = await cartService.delete(itemId);

            if(!deletedItem) return res.status(400).json({message: 'Delete failed'});

            return res.json({message: 'Delete successfully'});

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        
    }

}

module.exports = new CartController;