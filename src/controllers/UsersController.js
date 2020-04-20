const Users = require('../models/Users');

module.exports = {

    async getFromId(req, res) {
        const { user_id } = req.params;
 
        const users = await Users.findByPk(user_id);

        if(!users){
            return res.status(400).json({ error: "User not found" });
        }

        return res.json(users);
    },

    async index(req, res){
        try{
            const users = await Users.findAll();

            return res.json(users);

        }catch(error){
            console.error(error);
        }
        
    },

    async store(req, res){
        const { nome, email, telefone, senha } = req.body;

        try{

            const user = await Users.create({ nome, email, telefone, senha});

            return res.json(user);

        }catch(error){
            console.error(error);
        }

        
    }
};