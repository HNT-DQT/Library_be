const accountService = require('../../services/account.service');
const Util = require('../../utils/util');
const bcrypt = require('bcrypt');
const {Role} = require('../models/account.model');
const authz = require('../../middlewares/authorization');

class AccountController {
    
    /** POST /account/login */ 
    login = async (req, res) => {

        try{
            const body = req.body;

            const account = await accountService.findUsername(body.username);
            if(!account) return res.status(404).json('Email or phone number doesnot exist');

            const validPwd = await bcrypt.compare(body.password, account.password);
            if(!validPwd) return res.status(404).json('Wrong password');

            const accessToken = Util.generateAccessToken(account);
            const refreshToken = Util.generateRefreshToken(account);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false, // true if in deployment env
                path: '/',
                sameSite: 'strict',
            });

            delete account.password; delete account.role;

            return res.json({account, accessToken});

        }catch (err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    /** POST /account/create */
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
            
            const user = await accountService.create({
                email: body.email,
                phoneNumber: body.phoneNumber,
                password: hashedPwd,
                role: Role.USER,
                name: body.name,
                gender: Util.formatGender(body.gender),
                address: body.address,
            });

            if(!user) return res.status(400).json('Cannot create user');
            delete user.password; delete user.role;

            return res.json(user);
        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        

    }

    /** GET /account/profile */
    getProfile = async (req, res) => {
        try {
            const accId = authz.requestAccount(req, res);

            const account = await accountService.findById(accId);

            return res.json(account);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        
    }

    /** POST /account/change-password */
    changePassword = async (req, res) => {

        try {
            const body = req.body;
            const accId = authz.requestAccount(req, res);

            const acc = await accountService.findById(accId);

            
            const [oPwd, nPwd] = [body.oldPassword, body.newPassword];

            const validPwd = await bcrypt.compare(oPwd, acc.password);
            if(!validPwd) return res.status(404).json('Wrong old password');

            acc.password = await Util.hashPwd(nPwd); 
            const account = await accountService.update(acc);

            delete account.password; delete account.role;
            return res.json(account);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    /** POST /account/update-profile */
    updateProfile = async(req, res) => {

        try {
            const body = req.body;
            delete body.password; delete body.role;
            const accId = authz.requestAccount(req, res);

            body._id = accId;
            if(body.gender) body.gender = Util.formatGender(body.gender);
            
            const account = await accountService.update(body);
            
            delete account.password; delete account.role;
            return res.json(account);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    /** GET /account/logout */
    logout(req, res){

        res.json({content: 'logout'});

    }

    /** GET /account/get-all-librarians */
    getAllLibrarian = async (req, res) => {
        try {
            const account = await accountService.getAll({role: Role.LIBRARIAN});
            return res.json(account);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        
    }

    /** POST /account/create-librarian */
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

            const librarian = await accountService.create({
                email: body.email,
                phoneNumber: body.phoneNumber,
                password: hashedPwd,
                role: Role.LIBRARIAN,
                name: body.name,
                gender: Util.formatGender(body.gender),
                address: body.address,
            });

            if(!librarian) return res.status(500).json('Cannot create librarian');
            delete librarian.password; delete librarian.role;

            return res.json(librarian);
        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        

    }

    /** GET /account/get-all-users */
    getAllUser = async (req, res) => {
        try {
            const account = await accountService.getAll({role: Role.USER});
            return res.json(account);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        
    }

    /** GET /account/lock-user */
    lockUser = async (req, res) =>{

        try{
            const [userId, userStt] = [req.query.id, req.query.stt ?? true];

            const userAcc = await accountService.findById(userId);
            if(userAcc.role !== Role.USER) 
                return res.status(403).json('You are not allowed');

            userAcc.isLock = userStt;
            const account = await accountService.update(userAcc);

            delete account.password; delete account.role;
            
            return res.json(account);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }
        
    };

}

module.exports = new AccountController;