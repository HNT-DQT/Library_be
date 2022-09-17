
class ExtensionController{
    
    // get /:slug
    index(req, res){
        
        res.json({content: 'get all exts of trans'});

    }

    getExtension(req, res){

        res.json({content: 'get exts'});

    }

    createExtension(req, res){

        res.json({content: 'create exts'});

    }

    updateExtension(req, res){

        res.json({content: 'update exts'});

    }

    deleteExtension(req, res){

        res.json({content: 'delete exts'});

    }

}

module.exports = new ExtensionController;