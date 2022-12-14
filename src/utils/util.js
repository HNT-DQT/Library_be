const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {ACCESS_SECRET_KEY, REFRESH_SECRET_KEY, BCRYPT_SALT} = require('../configs/config');
const {Gender} = require('../app/models/account.model');
const {Status} = require('../app/models/book.model');

class Util {

    generateAccessToken = (data) => {
        return jwt.sign({
            id: data._id,
            email: data.email,
            phoneNumber: data.phoneNumber,
            name: data.name,
            role: data.role,
        }, ACCESS_SECRET_KEY, { expiresIn: "7d" });
    }

    generateRefreshToken = (data) => {
        return jwt.sign({
            id: data._id,
            email: data.email,
            phoneNumber: data.phoneNumber,
            name: data.name,
            role: data.role,
        }, REFRESH_SECRET_KEY, { expiresIn: "7d" });
    }

    formatGender = (gender) => {
        if(gender.toUpperCase() === Gender.MALE) 
            return Gender.MALE;
        else if(gender.toUpperCase() === Gender.FEMALE) 
            return Gender.FEMALE;
        else return Gender.NONE;
    }

    formatStatus = (status) => {
        if(status.toUpperCase() === Status.AVAILABLE)
            return Status.AVAILABLE;
        else if(status.toUpperCase() === Status.UNAVAILABLE)
            return Status.UNAVAILABLE;
        else return Status.BROKEN_OR_LOST;
    }
    
    formatReturnedDate = (time, startedDate) => {
        const week = 7*24*60*60*1000;
        if(time[1] === 'w')
            if(time[0] > 4) 
                return startedDate.getTime() + 4*week; // default is 4 weeks
            else return startedDate.getTime() + time[0]*week;
        else return startedDate.getTime() + week; // default is 1 week
    }

    hashPwd = async (pwd) => {
        const salt = await bcrypt.genSalt(BCRYPT_SALT);
        return await bcrypt.hash(pwd, salt);
    }

}

module.exports = new Util; 