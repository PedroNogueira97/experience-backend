const { Model, DataTypes } = require('sequelize');

class Clients extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING
        }, {
           sequelize
        })
    }
}

module.exports = Clients;