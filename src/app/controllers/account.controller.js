const accountService = require('../../services/account.service');
const {Role} = require('../models/account.model');

class AccountController {
    
    // get /:slug
    index = async (req, res) => {
        let accounts = await accountService.getAll();
        console.log(accounts);
        if(accounts) 
            res.json(accounts);
        else res.status(400).json({error: 'Error!'});

    }

    login(req, res){

        res.json({content: 'login'});

    }

    create = async (req, res) => {

        try{
            const acc = await accountService.create({
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: req.body.password,
                role: Role.user,
                slug: req.body.slug ?? null,
            });
            console.log(req.body.slug);
            res.json(acc);
        }catch(err){
            res.status(400).json({error: err});
        }
        

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

module.exports = new AccountController;