const House = require('../models/House');

class HouseController{

    async index(req,res){
        const {status} = req.query;
        
        const house = await House.find({status});
        return res.json(house);
    }

    async store(req,res){
        const {filename} = req.file;
        const {description,location,status,price} = req.body;
        const {user_id} = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            status,
            location,
        })

        return res.json(house);
    }

    async update(req,res){
        const {filename} = req.file;
        const {house_id} = req.params;
        const {description,location,status,price} = req.body;
        const {user_id} = req.headers;

        const houses = await House.updateOne({_id: house_id},{
            user: user_id,
            thumbnail: filename,
            description,
            price,
            status,
            location,
        });

        return res.json(houses);
    }
}

module.exports = new HouseController();