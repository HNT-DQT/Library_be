const titleService = require('../../services/title.service');

class TitleController{
    
    getAllTitles = async(req, res) => {
        
        try {

            const titles = await titleService.getAll();

            for (let i in titles) {
                titles[i] = titles[i].toObject();
                delete titles[i].trend;
            }

            return res.json(titles);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    getTitle = async(req, res) => {

        try {
            const titleSlug = req.params.slug;

            const title = await titleService.findBySlug(titleSlug);

            if(!title) return res.status(404).json("Not found");

            return res.json(title);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    createTitle = async (req, res) => {

        try {
            const body = req.body;
            body.availability = body.quantity;

            const title = await titleService.create(body);

            return res.json(title);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    updateTitle = async(req, res) => {

        try {
            const titleId = req.query.id;
            const body = req.body;
            delete body.trend;
            
            body._id = titleId;

            const title = await titleService.update(body);

            if(!title) return res.status(404).json('Not found');

            return res.json(title);

        }catch(err){
            console.log(err);
            return res.status(400).json({error: err.message});
        }

    }

    deleteTitle(req, res){

        res.json({content: 'delete title'});

    }

}

module.exports = new TitleController;