const Clients = require('../models/Clients');
const chalk = require('chalk');

module.exports = {

    async getFromId(req, res){
        const { client_id } = req.params;

        const clients = await Clients.findByPk(client_id);

        if(!clients){
            return res.status(400).json({ error: "Cliente não encontrado" });
        }

        return res.json(clients);
    },

    async index(req, res){

        try{
            const clients = await Clients.findAll();

            return res.json(clients);

        }catch(error){
            msg = chalk.bold.red(error);
            console.error(msg);
        }
        
    },

    async store(req, res){
        const { nome, cpf, endereco, telefone } = req.body;

        try{
            const client = await Clients.create({ nome, cpf, endereco, telefone });

            return res.json(client);
        }catch(error){
            msg = chalk.bold.red(error);
            console.error(msg);
        }

        

        
    }
};