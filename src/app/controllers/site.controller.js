
class SiteController{
    
    // get /home
    index(req, res){
        
        res.json({content: 'home'});

    }

    search(req, res){

        res.json({content: 'search'});

    }

}

module.exports = new SiteController;