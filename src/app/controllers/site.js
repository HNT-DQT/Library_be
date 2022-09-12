
class SiteController{
    
    // get /home
    index(req, res){
        
        res.json({content: 'home'});

    }

}

module.exports = new SiteController;