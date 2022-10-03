const jwt = require('jsonwebtoken');
const {REFRESH_SECRET_KEY} = require('../../configs/config');
const Util = require('../../utils/util');

class SiteController{
    
    // get /home
    index(req, res){
        
        res.json({content: 'home'});

    }

    search(req, res){

        res.json({content: 'search'});

    }

    refreshToken = (req, res) => {
        const refreshToken = req.cookie.refreshToken;
        if(!refreshToken) return res.status(401).json('You are not authenticated');
        
        jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, acc) => {
            if(err) console.log(err);

            const newAccessToken = Util.generateAccessToken(acc);
            const newRefreshToken = Util.generateRefreshToken(acc);

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false, // true if in deployment env
                path: '/',
                sameSite: 'strict',
            });

            return res.json({newAccessToken});

        });

    }

}

module.exports = new SiteController;