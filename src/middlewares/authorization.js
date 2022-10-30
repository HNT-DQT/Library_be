const jwt = require('jsonwebtoken');
const {ACCESS_SECRET_KEY} = require('../configs/config');
const {Role} = require('../app/models/account.model');

const Authorization = {

    verifyToken : (req, res, next) => {
        const token = req.rawHeaders[1];
      
        if(token){
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, ACCESS_SECRET_KEY, (err, account) => {
                if(err)
                    return res.status(403).json('Token is not valid');
                req.account = account;
                return next();
            });
        }
        else return res.status(401).json('You are not authenticated');

    },

    verifyAdmin : (req, res, next) => {
        Authorization.verifyToken(req, res, () => {
            if(req.account.role === Role.ADMIN){
                return next();
            }

            return res.status(403).json('You are not allowed');
        });
    },

    verifyLibrarian : (req, res, next) => {
        Authorization.verifyToken(req, res, () => {
            if(req.account.role === Role.LIBRARIAN){
                return next();
            }

            return res.status(403).json('You are not allowed');
        });
    },

    verifyUser : (req, res, next) => {
        Authorization.verifyToken(req, res, () => {
            if(req.account.role === Role.USER){
                return next();
            }

            return res.status(403).json('You are not allowed');
        });
    },

    requestAccount : (req, res) => {
        Authorization.verifyToken(req, res, () => {});
        return req.account.id;
    }

}

module.exports = Authorization;