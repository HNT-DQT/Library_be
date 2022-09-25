const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {TOKEN_SECRET_KEY, BCRYPT_SALT} = require('../configs/config');
const {Gender} = require('../app/models/account.model');

class Util {

    generateAccessToken = (data) => {
        return jwt.sign(data, TOKEN_SECRET_KEY, { expiresIn: "7d" });
    }

    formatGender = (gender) => {
        if(gender.toUpperCase() === Gender.MALE) 
            return Gender.MALE;
        else if(gender.toUpperCase() === Gender.FEMALE) 
            return Gender.FEMALE;
        else return Gender.NONE;
    }

    hashPwd = async (pwd) => {
        const salt = await bcrypt.genSalt(BCRYPT_SALT);
        return await bcrypt.hash(pwd, salt);
    }

}

module.exports = new Util; 