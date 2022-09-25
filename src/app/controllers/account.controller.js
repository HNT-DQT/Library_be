const accountService = require('../../services/account.service');
const Util = require('../../utils/util');
const bcrypt = require('bcrypt');
const {Role} = require('../models/account.model');

class AccountController {
    
    // get /profile
    getProfile = async (req, res) => {
        let accounts = await accountService.getAll();
        console.log(accounts);
        if(accounts) 
            res.json(accounts);
        else res.status(400).json({error: 'Error!'});

    }

    login = async (req, res) => {

        try{
            const body = req.body;

            const acc = await accountService.findUsername(body.username);
            if(!acc) return res.status(404).json('Email or phone number doesnot exist');

            const validPwd = await bcrypt.compare(body.password, acc.password);
            if(!validPwd) return res.status(404).json('Wrong password');

            const accessToken = Util.generateAccessToken({
                id: acc._id,
                email: acc.email,
                phoneNumber: acc.phoneNumber,
                name: acc.name,
                role: acc.role,
            });
            const {password, role, ...account} = acc._doc;

            return res.json({account, accessToken});

        }catch (err){
            return res.status(400).json({error: err.message});
        }

    }

    createUser = async (req, res) => {

        try{
            const body = req.body;

            const emailCheck = await accountService.checkEmail(body.email);
            if(emailCheck)
                return res.status(400).json("Email existed");
        
            const phoneNumberCheck = await accountService.checkPhoneNumber(body.phoneNumber);
            if(phoneNumberCheck)
                return res.status(400).json("Phone number existed");

            const hashedPwd = await Util.hashPwd(body.password);
            
            let user = await accountService.create({
                email: body.email,
                phoneNumber: body.phoneNumber,
                password: hashedPwd,
                role: Role.USER,
                name: body.name,
                gender: Util.formatGender(body.gender),
                address: body.address,
            });
            const {password, role, ...nUser} = user._doc;

            return res.json(nUser);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
        

    }

    createLibrarian = async (req, res) => {
        try{
            const body = req.body;

            const emailCheck = await accountService.checkEmail(body.email);
            if(emailCheck)
                return res.status(400).json("Email existed");
        
            const phoneNumberCheck = await accountService.checkPhoneNumber(body.phoneNumber);
            if(phoneNumberCheck)
                return res.status(400).json("Phone number existed");

            const hashedPwd = await Util.hashPwd(body.password);

            const user = await accountService.create({
                email: body.email,
                phoneNumber: body.phoneNumber,
                password: hashedPwd,
                role: Role.LIBRARIAN,
                name: body.name,
                gender: accountService.formatGender(body.gender),
                address: body.address,
            });
            const {password, role, ...nUser} = user._doc;

            return res.json(nUser);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
        

    }

    logout(req, res){

        res.json({content: 'logout'});

    }

    changePassword(req, res){

        res.json({content: 'change password'});

    }

    lockUser = async (req, res) =>{

        res.json({content: 'lock user'});
    };

    updateProfile(req, res){

        res.json({content: 'update profile'});

    }

}

module.exports = new AccountController;