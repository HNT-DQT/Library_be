
class TitleController{
    
    // get /:slug
    index(req, res){
        
        res.json({content: 'get all'});

    }

    getTitle(req, res){

        res.json({content: 'get title'});

    }

    createTitle(req, res){

        res.json({content: 'create title'});

    }

    updateTitle(req, res){

        res.json({content: 'update title'});

    }

    deleteTitle(req, res){

        res.json({content: 'delete title'});

    }

}

module.exports = new TitleController;