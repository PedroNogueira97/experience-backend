const Users = require('../models/Users');

module.exports = {
    async create(req, res){
        
        try{
            const { email, senha } = req.body;

            const user = await Users.findOne({
                attributes:['nome', 'email', 'senha'],
                where: {
                    'email': email,
                    'senha': senha,
                }
            })

            return res.json(user);

        }catch(error){
            return res.status(400).json({ error: 'User not found' });
        }
        
    }
};