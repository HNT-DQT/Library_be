
class NotificationController{
    
    // get /:slug
    index(req, res){
        
        res.json({content: 'get all notification of user'});

    }

    getNoti(req, res){

        res.json({content: 'get notification'});

    }

    createNoti(req, res){

        res.json({content: 'create notification'});

    }

    updateNoti(req, res){

        res.json({content: 'update notification'});

    }

    deleteNoti(req, res){

        res.json({content: 'delete notification'});

    }

}

module.exports = new NotificationController;