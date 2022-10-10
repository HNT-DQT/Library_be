const cartService = require('../../services/cart.service');
const authorization = require('../../middlewares/authorization');

class CartController{

    getCart = async(req, res) => {

        try {
            const userId = authorization.requestAccount(req, res);

            const carts = await cartService.getAll(userId);
            return res.json(carts);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    addToCart = async(req, res) => {

        try {
            const titleId = req.body.titleId;
            const userId = authorization.requestAccount(req, res);

            const nCart = await cartService.create({titleId: titleId, userId: userId});
            return res.json(nCart);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    deleteFromCart = async(req, res) => {
        const itemId = body.params.id;

        const item = await cartService.delete(itemId);

        if(!item) return res.status(400).json({message: 'Delete failed'});

        return res.json({message: 'Delete successfully'});

    }

}

module.exports = new CartController;