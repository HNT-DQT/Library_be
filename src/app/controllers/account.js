
class AccounntController{
    
    // get /:slug
    index(req, res){
        
        res.json({content: 'profile'});

    }

    login(req, res){

        res.json({content: 'login'});

    }

    create(req, res){

        res.json({content: 'create'});

    }

    logout(req, res){

        res.json({content: 'logout'});

    }

    changePassword(req, res){

        res.json({content: 'change password'});

    }

    updateProfile(req, res){

        res.json({content: 'update profile'});

    }

    getCart(req, res){

        res.json({content: 'cart'});

    }

}

module.exports = new AccounntController;