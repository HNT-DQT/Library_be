
class CartController{

    getCart(req, res){

        res.json({content: 'get Cart'});

    }

    createCart(req, res){

        res.json({content: 'create Cart'});

    }

    updateCart(req, res){

        res.json({content: 'update Cart'});

    }

    deleteCart(req, res){

        res.json({content: 'delete Cart'});

    }

}

module.exports = new CartController;